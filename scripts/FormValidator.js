export class FormValidator {
    constructor(selectors, valideForm){
        this._selectors = selectors;
        this._valideForm = valideForm;
    }

    enableValidation (){
        this._setEventListeners ();
    }

    _setEventListeners (){
        const inputList = Array.from(this._valideForm.querySelectorAll(this._selectors.inputSelector));
        const buttonElement = this._valideForm.querySelector(this._selectors.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputSelector) => {
            inputSelector.addEventListener('input', () => {
                this._checkInputValidity(inputSelector);
                this._toggleButtonState(inputList, buttonElement);
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

    _toggleButtonState(inputList, buttonElement){
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._selectors.inactiveSubmitButtonClass);
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(this._selectors.inactiveSubmitButtonClass);
            buttonElement.removeAttribute('disabled', 'disabled');
        }
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputSelector) => {
            return !inputSelector.validity.valid;
        });
    }

}