const popupValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveSubmitButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

const showError = ({formSelector, inputSelector, inputErrorClass, errorClass}, errorMassage) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(inputErrorClass);
    errorElement.textContent = errorMassage;
    errorElement.classList.add(errorClass);
};

const hideError = ({formSelector, inputSelector, inputErrorClass, errorClass}) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = ({formSelector, inputSelector, ...rest}) => {
    if (!inputSelector.validity.valid) {
      showError({formSelector, inputSelector, ...rest}, inputSelector.validationMessage);
    } else {
      hideError({formSelector, inputSelector, ...rest});
    }
};

const setEventListeners = ({formSelector, inputSelector, submitButtonSelector, inactiveSubmitButtonClass, ...rest}) => {
    const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
    const buttonElement = formSelector.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, {inactiveSubmitButtonClass});
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            checkInputValidity({formSelector, inputSelector, ...rest});
            toggleButtonState(inputList, buttonElement, {inactiveSubmitButtonClass});
        })
    }); 
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, {inactiveSubmitButtonClass}) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveSubmitButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(inactiveSubmitButtonClass);
        buttonElement.removeAttribute('disabled', 'disabled');
    }
};

const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach ((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners({formSelector, ...rest});
    });
};

enableValidation(popupValidation); 
