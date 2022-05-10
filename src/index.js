import './pages/index.css';
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';
import {initialCards, popupInputSelectors, popupProfileOpenButton, popupAddCardOpenButton,
        inputNameProfile, inputAboutProfile, formPopupProfile, formPopupAddCard} from './utils/constants.js';

const validationAddCard = new FormValidator (popupInputSelectors, formPopupAddCard);
const validationProfileEdit = new FormValidator (popupInputSelectors, formPopupProfile);
const userInfo = new UserInfo ({selectorName: '.profile__name', selectorAbout: '.profile__about'})
const section = new Section({items:initialCards, renderer: renderCard}, '.cards-template_type_default')
section.renderItems();
const popupWithImage = new PopupWithImage ('.popup_view-image');


//PopupCard

const popupAddCardForm = new PopupWithForm ({handleFormSubmit: (inputsValues) => {
  renderCard({name: inputsValues.name, link: inputsValues.link});
  }},
'.popup_add-card')

function renderCard (data) {
  const card = new Card({data, handleCardClick:()=>{popupWithImage.openViewImage(data)}}, '.cards-template_type_default');
  const cardElement = card.generateCard();
  section.addItem(cardElement);
};

popupAddCardOpenButton.addEventListener('click', () => {
  popupAddCardForm.openPopup();
  validationAddCard.toggleButtonState();
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
    popupProfileForm.openPopup();
    
});

//Events

popupProfileForm.setEventListeners();
popupAddCardForm.setEventListeners();
popupWithImage.setEventListener();

//Validations

validationAddCard.enableValidation();
validationProfileEdit.enableValidation();

