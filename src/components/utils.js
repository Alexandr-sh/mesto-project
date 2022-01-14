import { toggleButtonState } from "./validate.js";
import { isValid } from "./validate.js";

export const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, settings);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, settings);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });

    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      toggleButtonState(inputList, buttonElement, settings);
    })
  }; 