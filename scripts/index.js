let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let formPopup = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputAbout = document.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evn) {
    evn.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}

editButton.addEventListener('click',openPopup); 
popupCloseButton.addEventListener('click', closePopup);
formPopup.addEventListener('submit', formSubmitHandler);
