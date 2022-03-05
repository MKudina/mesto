let editButton = document.querySelector('.profile__edit-button');
let popupOpened = document.querySelector('.popup');


editButton.addEventListener('click', function() {
    popupOpened.className = 'popup popup_opened';    
}); 

let popupCloseButton = document.querySelector('.popup__close-button');

popupCloseButton.addEventListener('click', function(){
    popupOpened.className = 'popup';
});

let formPopup = document.querySelector('.popup__container');

let inputName = document.querySelector('.popup__input-name');

let inputAbout = document.querySelector('.popup__input-about');

console.log(inputName); 
console.log(inputAbout); 

inputName.hasAttribute('value');

function formSubmitHandler (evn) {
    evn.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileAbout = document.querySelector('.profile__about');
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popupOpened.className = 'popup';
}

formPopup.addEventListener('submit', formSubmitHandler);
