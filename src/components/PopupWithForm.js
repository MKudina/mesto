import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor({handleFormSubmit}, popupSelector){
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input')
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
            
        });
        return this._formValues
    }

    close(){
        super.close();
        this._popupForm.reset();
    }

    setEventListeners(){
        super.setEventListener();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }
}