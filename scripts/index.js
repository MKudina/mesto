let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');
let addCard = profile.querySelector('.profile__add-button');

let popup = document.querySelector('.popup');
let popupProfileCloseButton = popup.querySelector('.popup__close-button');
let formPopup = popup.querySelector('.popup__form');
let inputName = popup.querySelector('.popup__input_type_name');
let inputAbout = popup.querySelector('.popup__input_type_about');

let popupAddCard = document.querySelector('.popup-add-card');
let popupAddCardCloseButton = popupAddCard.querySelector('.popup-add-card__close-button');
let formPopupAddCard = popupAddCard.querySelector('.popup-add-card__form');
let inputNameImage = popupAddCard.querySelector('.popup-add-card__input_type_name-image');
let inputImage = popupAddCard.querySelector('.popup-add-card__input_type_image');

function openPopupProfile() {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

function closePopupProfile() {
    popup.classList.remove('popup_opened');
}

function openPopupAddCard() {
    popupAddCard.classList.add('popup-add-card_opened');
}

function closePopupAddCard() {
    popupAddCard.classList.remove('popup-add-card_opened');
}

function formSubmitHandler (evn) {
    evn.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopupProfile();
}

editButton.addEventListener('click',openPopupProfile); 
popupProfileCloseButton.addEventListener('click', closePopupProfile);
formPopup.addEventListener('submit', formSubmitHandler);

addCard.addEventListener('click',openPopupAddCard);
popupAddCardCloseButton.addEventListener('click', closePopupAddCard);
