

import '../index.css';


import { enableValidation } from './validate.js';
import { createPlaceCard } from './card.js';
import { closePopup } from './modal.js';
import { openPopup } from './modal.js';
import { loadUserInfo } from './api.js';
import { loadCardsData } from './api.js';
import { sendUserInfo } from './api.js';
import { requestNewCard } from './api.js';


//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окон
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardForm = addCardPopup.querySelector('.popup__container');/*addCardPopup не являетя формой
в функции добавления карточки addCardPopup нельзя сбросить*/
const addCardSaveBtn = addCardPopup.querySelector('.popup__save-button');

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
export const imgPopup = document.querySelector('.popup_type_img');
const popups = [addCardPopup, editProfilePopup, imgPopup];

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
const avatar = document.querySelector('.profile__avatar');


editProfilePopup.addEventListener('submit', savePopupProfile);


//Получение секции с карточками мест
const places = document.querySelector('.elements');

//Добавление реакции на нажатие кнопки сохранить
function updateProfile(userData) {
  profileName.textContent = userData.name;
  profileDescription.textContent = userData.about;
  avatar.style.backgroundImage = `url(${userData.avatar})`;
}

function savePopupProfile(event) {
  event.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  sendUserData({name:popupProfileName.value,about:popupProfileDescription.value})
  closePopup(editProfilePopup);
}

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
  addCardSaveBtn.setAttribute('disabled', 'disabled');
  addCardSaveBtn.classList.add('popup__save-button_disabled');
  sendNewCard(cardData);
  closePopup(addCardPopup);
}
addCardPopup.addEventListener('submit', saveNewPlaceForm);

function sendNewCard(data){
  requestNewCard(data).then(res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}).catch(err => {
  console.log(err);
})
}




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

function getUserInfo() {
  loadUserInfo().then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }).then(data => {
    updateProfile(data);
  })
    .catch(error => {
      console.log(error);
    })
}

getUserInfo();


//Загрузка карточек с сервера
loadCardsData().then(res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}).then(data => {
  data.forEach(function (item) {
    const card = createPlaceCard(item);
    places.append(card);
  })
})
  .catch(err => {
    console.log(err);
  })

function sendUserData(data){
  sendUserInfo(data).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }).catch(err => {
    console.log(err);
  })
}