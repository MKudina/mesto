const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
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
const inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
const inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about');
const inputNameAddCard = popupAddCard.querySelector('.popup__input_type_name-image');
const inputLinkAddCard = popupAddCard.querySelector('.popup__input_type_link');

//popups form
const formPopup = popupEditProfile.querySelector('.popup__form');
const addCardButton = popupAddCard.querySelector('.popup__form');

//cardsList
const cardsList = document.querySelector('.cards');


//functions

const togglePopup = function (popup) {
    popup.classList.toggle ('popup_opened');
}

function editProfile (evn) {
    evn.preventDefault();
    profileName.textContent = inputNameProfile.value;
    profileAbout.textContent = inputAboutProfile.value;
    togglePopup (popupEditProfile);
}

//Events

popoupProfileOpen.addEventListener('click', function () {
    inputNameProfile.value = profileName.textContent;
    inputAboutProfile.value = profileAbout.textContent;
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

function createCard (data) {
  const card = cardsList.content.firstElementChild.cloneNode(true);
  card.querySelector('.card__name').textContent = data.name;
  card.querySelector('.card__image').src = data.link;
  card.querySelector('.card__like').addEventListener('click', (evn) => {
    evn.target.classList.toggle('card__like_active');
  });
  card.querySelector('.card__delete-button').addEventListener('click', (evn) => {
    evn.target.closest('.card').remove();
  });

  return card;
}

function renderCard (data) {
  const cardElement = createCard(data);
  cardsList.prepend(cardElement);
}

function addCard (evn) {
  evn.preventDefault();
  renderCard({
    name:`${inputNameAddCard.value}`,
    link:`${inputLinkAddCard.value}`
  });
  evn.currentTarget.reset();
  togglePopup (popupAddCard);
}

//events
formPopup.addEventListener('submit', editProfile);
addCardButton.addEventListener('submit', addCard);

initialCards.map(renderCard);






