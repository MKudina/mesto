export class Popup {
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    openPopup(){
        this._popupSelector.classList.add ('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    closePopup(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
        document.removeEventListener('click', this.setEventListner);
    }

    _handleEscClose(evn){
        if (evn.key === 'Escape'){
            this.closePopup();
          }
    }

    setEventListener(){
        this._popupSelector.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')){
                this.closePopup();
            }
        });
    }
}