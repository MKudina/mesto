export class FormValidator {
    constructor(selectors, valideForm){
        this._selectors = selectors;
        this._valideForm = valideForm;
        this._inputList = Array.from(this._valideForm.querySelectorAll(this._selectors.inputSelector));
        this._buttonElement = this._valideForm.querySelector(this._selectors.submitButtonSelector);
    }

    enableValidation (){
        this._setEventListeners ();
    }

    _setEventListeners (){
        this.toggleButtonState();
        this._inputList.forEach((inputSelector) => {
            inputSelector.addEventListener('input', () => {
                this._checkInputValidity(inputSelector);
                this.toggleButtonState();
            })
        }); 
    }

    _checkInputValidity(inputSelector){
        if (!inputSelector.validity.valid) {
            this._showError(inputSelector, inputSelector.validationMessage);
        } else {
            this._hideError(inputSelector);
         }
    }

    _showError(inputSelector, errorMassage){
        const errorElement = this._valideForm.querySelector(`.${inputSelector.id}-error`);
        inputSelector.classList.add(this._selectors.inputErrorClass);
        errorElement.textContent = errorMassage;
        errorElement.classList.add(this._selectors.errorClass);
    }

    _hideError(inputSelector){
        const errorElement = this._valideForm.querySelector(`.${inputSelector.id}-error`);
        inputSelector.classList.remove(this._selectors.inputErrorClass);
        errorElement.classList.remove(this._selectors.errorClass);
        errorElement.textContent = '';
    }

    toggleButtonState(){
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._selectors.inactiveSubmitButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
            this._buttonElement.classList.remove(this._selectors.inactiveSubmitButtonClass);
            this._buttonElement.removeAttribute('disabled', 'disabled');
        }
    }

    _hasInvalidInput(){
        return this._inputList.some((inputSelector) => {
            return !inputSelector.validity.valid;
        });
    }

}