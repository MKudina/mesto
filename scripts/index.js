import {openPopup, closePopup} from './utils.js'
import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialCards.js';


//Profile
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

//popups
const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_add-card');

//popups open buttons
const popupProfileOpen = profile.querySelector('.profile__edit-button');
const popupAddCardOpen = profile.querySelector('.profile__add-button');

//popups input
const inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
const inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about');
const inputNameAddCard = popupAddCard.querySelector('.popup__input_type_name-image');
const inputLinkAddCard = popupAddCard.querySelector('.popup__input_type_link');

//popups form
const formPopupProfile = popupEditProfile.querySelector('.popup__form');
const formPopupAddCard = popupAddCard.querySelector('.popup__form');

//cardsList
const cardsList = document.querySelector('.cards');

//popupSelectors
const popupSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveSubmitButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const validationAddCard = new FormValidator (popupSelectors, formPopupAddCard);
const validationProfileEdit = new FormValidator (popupSelectors, formPopupProfile);

//functions

function editProfile (evn) {
    evn.preventDefault();
    profileName.textContent = inputNameProfile.value;
    profileAbout.textContent = inputAboutProfile.value;
    closePopup (popupEditProfile);
};

function disabledPopupSubmit (){
  const PopupSubmit = formPopupAddCard.querySelector('.popup__submit');
  PopupSubmit.classList.add('popup__submit_inactive');
  PopupSubmit.setAttribute('disabled', 'disabled');
};

function popupInputValue () {
  inputNameProfile.value = profileName.textContent;
  inputAboutProfile.value = profileAbout.textContent;
}

function renderCard (data) {
  const card = new Card(data, '.cards-template_type_default');
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement);
};

function addCard (evn) {
  evn.preventDefault();
  renderCard({
    name:`${inputNameAddCard.value}`,
    link:`${inputLinkAddCard.value}`
  });
  closePopup (popupAddCard);
  formPopupAddCard.reset();
  disabledPopupSubmit ();
};

//Events

popupProfileOpen.addEventListener('click', () => {
    popupInputValue();
    openPopup (popupEditProfile);
});

popupAddCardOpen.addEventListener('click', () => {
    openPopup (popupAddCard);
});

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
      closePopup (popup)
    }
  });
});

formPopupProfile.addEventListener('submit', editProfile);
formPopupAddCard.addEventListener('submit', addCard);

popupInputValue();

initialCards.forEach((item) => {
  const card = new Card(item, '.cards-template_type_default');
  const cardElement = card.generateCard();

  cardsList.prepend(cardElement);
});

validationAddCard.enableValidation();
validationProfileEdit.enableValidation();

