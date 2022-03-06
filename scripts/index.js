let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');

let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-button');
let formPopup = popup.querySelector('.popup__form');
let inputName = popup.querySelector('.popup__input_type_name');
let inputAbout = popup.querySelector('.popup__input_type_about');

function openPopup() {
    console.log(popup);
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
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
