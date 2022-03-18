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
const popupViewImage = document.querySelector('.popup_view-image');

//popups close buttons

const popupEditProfileClose = popupEditProfile.querySelector('.popup__close-button');
const popupAddCardClose = popupAddCard.querySelector('.popup__close-button');
const popupViewImageClose = popupViewImage.querySelector('.popup__close-button');

//popups open buttons
const popupProfileOpen = profile.querySelector('.profile__edit-button');
const popupAddCardOpen = profile.querySelector('.profile__add-button');

//popups input
const inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
const inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about');
const inputNameAddCard = popupAddCard.querySelector('.popup__input_type_name-image');
const inputLinkAddCard = popupAddCard.querySelector('.popup__input_type_link');

//popups form
const formPopup = popupEditProfile.querySelector('.popup__form');
const addCardButton = popupAddCard.querySelector('.popup__form');

//popupViewImage
const popupImage = popupViewImage.querySelector('.popup__view-image');
const popupTitle = popupViewImage.querySelector('.popup__view-title');

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

function createCard (data) {
  const card = cardsList.content.firstElementChild.cloneNode(true);
  const imageName = card.querySelector('.card__name').textContent = data.name;
  const imageAlt = card.querySelector('.card__image').alt = `Карточка ${data.name}`;
  const imagelink = card.querySelector('.card__image').src = data.link;
  card.querySelector('.card__like').addEventListener('click', (evn) => {
    evn.target.classList.toggle('card__like_active');
  });
  card.querySelector('.card__delete-button').addEventListener('click', (evn) => {
    evn.target.closest('.card').remove();
  });
   card.querySelector('.card__image').addEventListener('click', () => {
     viewImage(imageName, imageAlt, imagelink);
   });
  return card;
}

function renderCard (data) {
  const cardElement = createCard(data);
  cardsList.prepend(cardElement);
}

function viewImage(imageName, imageAlt, imagelink) {
  popupImage.src = imagelink;
  popupImage.alt = imageAlt;
  popupTitle.textContent = imageName;
  togglePopup (popupViewImage);
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

//Events

popupProfileOpen.addEventListener('click', () => {
    inputNameProfile.value = profileName.textContent;
    inputAboutProfile.value = profileAbout.textContent;
    togglePopup (popupEditProfile);
});

popupAddCardOpen.addEventListener('click', () => {
    togglePopup (popupAddCard);
});

popupEditProfileClose.addEventListener('click', () => {
    togglePopup (popupEditProfile);
});

popupAddCardClose.addEventListener('click', () => {
    togglePopup (popupAddCard);
});

popupViewImageClose.addEventListener('click', () => {
  togglePopup (popupViewImage);
})
formPopup.addEventListener('submit', editProfile);
addCardButton.addEventListener('submit', addCard);

initialCards.map(renderCard);






