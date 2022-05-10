import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor({handleFormSubmit}, popupSelector){
        super(popupSelector);
        this._element = this._popupSelector.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues(){
        this._inputList = this._popupSelector.querySelectorAll('.popup__input')
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
            
        });
        return this._formValues
    }

    closePopup(){
        super.closePopup();
        this._element.reset();
    }

    setEventListeners(){
        super.setEventListener();
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
        })
    }
}