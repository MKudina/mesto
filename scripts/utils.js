function openPopup (popup) {
    popup.classList.add ('popup_opened');
    document.addEventListener('keyup', closePopupByEsc);
  };

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupByEsc);
};

function closePopupByEsc (evt){
    if (evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
};

export {openPopup, closePopup};