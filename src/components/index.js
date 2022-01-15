

import '../index.css';


import { enableValidation } from './validate.js';
import {initialCards} from './initial-cards.js';
import { createPlaceCard } from './card.js';
import { closePopup } from './modal.js';
import { openPopup } from './modal.js';


//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окон
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardForm = addCardPopup.querySelector('.popup__container');/*addCardPopup не являетя формой
в функции добавления карточки addCardPopup нельзя сбросить*/
const addCardSaveBtn = addCardPopup.querySelector('.popup__save-button');

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
export const imgPopup = document.querySelector('.popup_type_img');
const popups = [addCardPopup,editProfilePopup,imgPopup];

const name = addCardPopup.querySelector('.popup__text_type_card-name');
const link = addCardPopup.querySelector('.popup__text_type_card-link');

//Выбор полей ввода
const popupProfileName = document.querySelector('.popup__profile-name');
const popupProfileDescription = document.querySelector('.popup__profile-description');


//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click', function () {
  openPopup(editProfilePopup);
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
});

//Выбор элементов имя профиля и описание профиля 
const profileName = document.querySelector('.profile__name'); 
const profileDescription = document.querySelector('.profile__description');


editProfilePopup.addEventListener('submit', savePopupProfile);


//Получение секции с карточками мест
const places = document.querySelector('.elements');

//Добавление реакции на нажатие кнопки сохранить
function savePopupProfile(event) {
  event.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  closePopup(editProfilePopup);
}

//Заполняем секцию карточками
initialCards.forEach(function (item) {
  const card = createPlaceCard(item);
  places.append(card);
})


//Работа формы "Новое место"
//выбор кнопки "добавить место"
const addPlaceBtn = document.querySelector('.profile__add-button');


//Добавление реакции на нажатие кнопки "Добавить место"
addPlaceBtn.addEventListener('click', function () {
  openPopup(addCardPopup);
});

//Добавление реакции на нажатие кнопки сохранить
function saveNewPlaceForm(event) {
  event.preventDefault();
  const cardData = {};
  cardData.name = name.value;
  cardData.link = link.value;
  const card = createPlaceCard(cardData);
  places.prepend(card);
  addCardForm.reset();
  addCardSaveBtn.setAttribute('disabled','disabled');
  addCardSaveBtn.classList.add('popup__save-button_disabled');
  closePopup(addCardPopup);
}
addCardPopup.addEventListener('submit', saveNewPlaceForm);



enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_active'
}); 

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
})


