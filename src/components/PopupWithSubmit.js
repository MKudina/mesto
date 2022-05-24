import { Popup } from "./Popup";

export class PopupWithSubmit extends Popup{
    constructor({handleFormSubmit}, popupSelector){
        super(popupSelector);
        this._submitButton = this._popup.querySelector('.popup__submit');
        this._handleFormSubmit = handleFormSubmit;
    }

    open(card){
        this.card = card;
        super.open();
    }

    setEventListeners(){
        super.setEventListener();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this.close();
        })
    }
}