import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {initialCards, popupInputSelectors, popupProfileOpenButton, popupAddCardOpenButton,
        inputNameProfile, inputAboutProfile, formPopupProfile, formPopupAddCard} from '../utils/constants.js';

const validationAddCard = new FormValidator (popupInputSelectors, formPopupAddCard);
const validationProfileEdit = new FormValidator (popupInputSelectors, formPopupProfile);
const userInfo = new UserInfo ({selectorName: '.profile__name', selectorAbout: '.profile__about'})

const popupWithImage = new PopupWithImage ('.popup_view-image');

//PopupCard

const popupAddCardForm = new PopupWithForm ({handleFormSubmit: (inputsValues) => {
  const card = createCard({name: inputsValues.name, link: inputsValues.link},'.cards-template_type_default');
  section.addItem(card);
  }},
'.popup_add-card')

function createCard (data, cardSelector) {
  const card = new Card({data, handleCardClick:()=>{popupWithImage.open(data)}}, cardSelector);
  const cardElement = card.generateCard();
  return cardElement;
}

const section = new Section({items:initialCards, renderer: (data) =>{
  const card = createCard(data, '.cards-template_type_default');
  section.addItem(card);
}}, '.cards-template_type_default')
section.renderItems();

popupAddCardOpenButton.addEventListener('click', () => {
  validationAddCard.toggleButtonState();
  popupAddCardForm.open();
})

//PopupProfile

const popupProfileForm = new PopupWithForm ({handleFormSubmit: (inputValues) =>{
  userInfo.setUserInfo({
    name: inputValues.name,
    about: inputValues.about})
}}, '.popup_profile')

popupProfileOpenButton.addEventListener('click', () => {
    const userInfomation = userInfo.getUserInfo();
    const userName = userInfomation.name;
    const userAbout = userInfomation.about;
    inputNameProfile.value = userName;
    inputAboutProfile.value = userAbout;
    popupProfileForm.open();
    
});

//Events

popupProfileForm.setEventListeners();
popupAddCardForm.setEventListeners();
popupWithImage.setEventListener();

//Validations

validationAddCard.enableValidation();
validationProfileEdit.enableValidation();

// fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
//   headers: {
//     authorization: '105cfc4a-f759-497b-8721-ac1b8fdd890e'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });