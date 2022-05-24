  import './index.css';
  import { Api } from '../components/Api';
  import { Card } from '../components/Card.js';
  import { FormValidator } from '../components/FormValidator.js';
  import { Section } from '../components/Section.js';
  import { PopupWithImage } from '../components/PopupWithImage.js';
  import { PopupWithForm } from '../components/PopupWithForm.js';
  import { UserInfo } from '../components/UserInfo.js';
  import {popupInputSelectors, popupProfileOpenButton, popupAddCardOpenButton,
          inputNameProfile, inputAboutProfile, formPopupProfile, formPopupAddCard,
          popupProfileAvatarOpenButton, formPopupProfileAvatar, inputAvatarProfile} from '../utils/constants.js';
  import { PopupWithSubmit } from '../components/PopupWithSubmit';


  //ID = 6400895500d2623621312988
  
  let userId
  

  const validationAddCard = new FormValidator (popupInputSelectors, formPopupAddCard);
  const validationProfileEdit = new FormValidator (popupInputSelectors, formPopupProfile);
  const validationProfieEditAvatar = new FormValidator (popupInputSelectors, formPopupProfileAvatar);
  const userInfo = new UserInfo ({selectorName: '.profile__name', selectorAbout: '.profile__about',
  selectorAvatar: '.profile__avatar'}, userId);
  const popupWithImage = new PopupWithImage ('.popup_view-image');

  const api = new Api ({
    baseUrl:'https://mesto.nomoreparties.co/v1/cohort-41/',
    headers: {
      authorization: '105cfc4a-f759-497b-8721-ac1b8fdd890e'
    }
  })

  //PopupCard

  const popupAddCardForm = new PopupWithForm ({handleFormSubmit: (inputsValues) => {
    popupProfileForm.renderLoanding(true, 'Создается...');
    api.addCard(inputsValues)
      .then((responseData) => {
        const card = createCard(
          {name: responseData.name, link: responseData.link, owner: responseData.owner, 
            _id: responseData._id, likes: responseData.likes},  
            userId, '.cards-template_type_default')
        section.addItem(card)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfileForm.renderLoanding(false, 'Создать');
        popupAddCardForm.close();
      })
  }},
  '.popup_add-card')

  // 1

  const section = new Section( {renderer: (data) =>{
    const card = createCard(data, userId, '.cards-template_type_default');
    section.addItem(card);
  }}, '.cards-template_type_default')

  // 2

  function createCard (data, userId, cardSelector) {
    const card = new Card({data, userId,  
      handleCardClick: () => popupWithImage.open(data),
      handleDeleteCard: (card) => deleteCard.open(card),
      handleLikeClick: (card) => {
        if(!card.checkLike()){
          api.like(data._id)
            .then((responseData) => {
              card.likes = responseData.likes;
              card.like();
            })
            .catch((err) => {
              console.log(err);
            })
        }else{
          api.dislike(data._id)
            .then((responseData) => {
              card.likes = responseData.likes;
              card.dislike();
            })
            .catch((err) => {
              console.log(err);
            })
        }
      }}, cardSelector)
    const cardElement = card.generateCard();
    return cardElement;
  }

  const deleteCard = new PopupWithSubmit({
    handleFormSubmit: () => {
      api.deleteCard(deleteCard.card._cardId)
        .then(() => deleteCard.card.deleteCard())
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          deleteCard.close();
        })
    }
  },
  '.popup_submit')

  popupAddCardOpenButton.addEventListener('click', () => {
    validationAddCard.resetValidation();
    popupAddCardForm.open();
  })

  //PopupProfile

  const popupProfileForm = new PopupWithForm ({handleFormSubmit: (inputValues) =>{
    popupProfileForm.renderLoanding(true, 'Сохранить...');
    api.editProfile(inputValues)
      .then((responseData) => {
        userInfo.setUserInfo(responseData)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfileForm.renderLoanding(false, 'Сохранить');
        popupProfileForm.close();
      })
  }}, '.popup_profile')

const popupProfileAvatarForm = new PopupWithForm ({handleFormSubmit: (inputValue) =>{
  popupProfileAvatarForm.renderLoanding(true, 'Сохранить...');
  api.editAvatar(inputValue)
    .then((responseData) => {
      userInfo.setAvatar(responseData);
      close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileAvatarForm.renderLoanding(false, 'Сохранить');
      popupProfileAvatarForm.close();
    })
}}, '.popup_edit-avatar')

popupProfileOpenButton.addEventListener('click', () => {
  validationProfileEdit.resetValidation();
  const userInfomation = userInfo.getUserInfo();
  const userName = userInfomation.name;
  const userAbout = userInfomation.about;
  inputNameProfile.value = userName;
  inputAboutProfile.value = userAbout;
  popupProfileForm.open();
    
});

popupProfileAvatarOpenButton.addEventListener('click', () => {
  validationProfieEditAvatar.resetValidation();
  const avatarInformation = userInfo.getUserInfo();
  const avatarLink = avatarInformation.avatarLink;
  inputAvatarProfile.value = avatarLink;
  popupProfileAvatarForm.open();
})


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((responseDataArray) => {
    userId = responseDataArray[0]._id;
    userInfo.setUserInfo(responseDataArray[0]);
    userInfo.setAvatar(responseDataArray[0]);
    section.renderItems(responseDataArray[1].reverse());
  })
  .catch(err => console.log(err));

//Events

popupProfileForm.setEventListeners();
popupProfileAvatarForm.setEventListeners();
popupAddCardForm.setEventListeners();
popupWithImage.setEventListener();
deleteCard.setEventListeners();

//Validations

validationAddCard.enableValidation();
validationProfileEdit.enableValidation();
validationProfieEditAvatar.enableValidation();

