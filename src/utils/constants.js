  const popupInputSelectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveSubmitButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
  };

//Profile
const profile = document.querySelector('.profile');

//popups
const popupEditProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupEditAvatar = document.querySelector('.popup_edit-avatar')

//popups open buttons
const popupProfileOpenButton = profile.querySelector('.profile__edit-button');
const popupAddCardOpenButton = profile.querySelector('.profile__add-button');
const popupProfileAvatarOpenButton = profile.querySelector('.profile__edit-avatar-button')

//popups input
const inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
const inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about');
const inputAvatarProfile = popupEditAvatar.querySelector('.popup__input_type_link')

//popups form
const formPopupProfile = popupEditProfile.querySelector('.popup__form');
const formPopupAddCard = popupAddCard.querySelector('.popup__form');
const formPopupProfileAvatar = popupEditAvatar.querySelector('.popup__form')


  export {popupInputSelectors, popupProfileOpenButton, popupAddCardOpenButton,
          inputNameProfile, inputAboutProfile, formPopupProfile, formPopupAddCard,
          popupProfileAvatarOpenButton, formPopupProfileAvatar, inputAvatarProfile};