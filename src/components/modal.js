import { closePopupEsc } from "./index.js";
import { popups } from "./index.js";
import { closePopupMC } from "./index.js";

//Функции открытия и закрытия попап окон
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',closePopupEsc);
    popup.addEventListener('click',closePopupMC);
  }
  
  export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',closePopupEsc);
    popup.removeEventListener('click',closePopupMC);
  }

export function closeAllPopup() {
  popups.forEach((popup) => {
      closePopup(popup);
    });
  }