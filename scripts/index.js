//Profile
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

//popups
const popupEditProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_add-card');

//popups close buttons

const popoupEditProfileClose = popupEditProfile.querySelector('.popup__close-button');
const popoupAddCardClose = popupAddCard.querySelector('.popup__close-button');

//popups open buttons
const popoupProfileOpen = profile.querySelector('.profile__edit-button');
const popoupAddCardOpen = profile.querySelector('.profile__add-button');

//popups input
const inputName = popupEditProfile.querySelector('.popup__input_type_name');
const inputAbout = popupEditProfile.querySelector('.popup__input_type_about');

//popups form
const formPopup = popupEditProfile.querySelector('.popup__form');


console.log(profileName, profileAbout, inputName, inputAbout);

//functions

const togglePopup = function (popup) {
    popup.classList.toggle ('popup_opened');
}

function formSubmitHandler (evn) {
    evn.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    togglePopup (popupEditProfile);
}

//Events

popoupProfileOpen.addEventListener('click', function () {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    togglePopup (popupEditProfile);
});

popoupAddCardOpen.addEventListener('click', function () {
    togglePopup (popupAddCard);
});

popoupEditProfileClose.addEventListener('click', function () {
    togglePopup (popupEditProfile);
});

popoupAddCardClose.addEventListener('click', function () {
    togglePopup (popupAddCard);
});

formPopup.addEventListener('submit', formSubmitHandler);
