const initialCards = [
    {
      name: 'Кавказ',
      link: 'https://sun9-71.userapi.com/s/v1/if2/MKzkW_ey9dJfXToS1OOdn5q_sC53BD8FnIHUjMD09coRWAAND7zhPPIqs3ScOh8v9DfnAPWn-LjKiB9UFjb32wZT.jpg?size=2560x1920&quality=96&type=album'
    },
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

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

//popups open buttons
const popupProfileOpenButton = profile.querySelector('.profile__edit-button');
const popupAddCardOpenButton = profile.querySelector('.profile__add-button');

//popups input
const inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
const inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about');

//popups form
const formPopupProfile = popupEditProfile.querySelector('.popup__form');
const formPopupAddCard = popupAddCard.querySelector('.popup__form');


  export {initialCards, popupInputSelectors, popupProfileOpenButton, popupAddCardOpenButton,
          inputNameProfile, inputAboutProfile, formPopupProfile, formPopupAddCard};