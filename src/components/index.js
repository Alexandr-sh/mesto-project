

import '../index.css';


import { enableValidation } from './validate.js';
import { createPlaceCard } from './card.js';
import { closePopup } from './modal.js';
import { openPopup } from './modal.js';
import { loadUserInfo } from './api.js';
import { loadCardsData } from './api.js';
import { sendUserInfo } from './api.js';
import { requestNewCard, requestUpdateAvatar } from './api.js';

//Имя пользователя
export let userName = '';

//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup обновить аватар
const updateAvatarPopup = document.querySelector('.popup_type_update-avatar');
const updateAvatarForm = updateAvatarPopup.querySelector('.popup__container');
const updateAvatarSaveBtn = updateAvatarPopup.querySelector('.popup__save-button');
const avatarLink = updateAvatarPopup.querySelector('.popup__text_type_avatar-link')

//Выбор popup окон
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardForm = addCardPopup.querySelector('.popup__container');/*addCardPopup не являетя формой
в функции добавления карточки addCardPopup нельзя сбросить*/
const addCardSaveBtn = addCardPopup.querySelector('.popup__save-button');

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileSaveBtn = editProfilePopup.querySelector('.popup__save-button');
export const imgPopup = document.querySelector('.popup_type_img');
const popups = [addCardPopup, editProfilePopup, imgPopup, updateAvatarPopup];

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
const avatarOverlay = document.querySelector('.profile__avatar-overlay');



//Добавление реакции на нажатие на аватар
avatarOverlay.addEventListener('click', () => {
  openPopup(updateAvatarPopup);
})

//Обновление аватара
updateAvatarPopup.addEventListener('submit', (evt) => {
  evt.preventDefault();
  toggleSaveBtnCaption('Сохранение...',evt.submitter);
  requestUpdateAvatar(avatarLink.value)
    .then(data => {
      avatar.style.backgroundImage = `url(${data.avatar})`;
      closePopup(updateAvatarPopup);
      updateAvatarForm.reset();
      evt.submitter.setAttribute('disabled', 'disabled');
      evt.submitter.classList.add('popup__save-button_disabled');
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      toggleSaveBtnCaption('Сохранить',evt.submitter);
    })
})


editProfilePopup.addEventListener('submit', savePopupProfile);

//Получение секции с карточками мест
export const places = document.querySelector('.elements');

//Добавление реакции на нажатие кнопки сохранить
function updateProfile(userData) {
  userName = userData.name;
  profileName.textContent = userName;
  profileDescription.textContent = userData.about;
  avatar.style.backgroundImage = `url(${userData.avatar})`;
}

function savePopupProfile(event) {
  event.preventDefault();
  toggleSaveBtnCaption("Сохранение...",event.submitter);
  sendUserInfo({ name: popupProfileName.value, about: popupProfileDescription.value }).then(res => {
    profileName.textContent = popupProfileName.value;
    profileDescription.textContent = popupProfileDescription.value;
    closePopup(editProfilePopup);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    toggleSaveBtnCaption("Сохранить",event.submitter);
  })
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
  toggleSaveBtnCaption('Сохранение...',event.submitter);
  requestNewCard({ name: name.value, link: link.value }).then(data => {
    createPlaceCard(data);
    addCardForm.reset();
    evt.submitter.setAttribute('disabled', 'disabled');
    evt.submitter.classList.add('popup__save-button_disabled');
  })
    .catch(err => {
      console.log(err);
    }).finally(() => {
      toggleSaveBtnCaption('Сохранить',event.submitter);
      closePopup(addCardPopup);
    })
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


Promise.all([loadUserInfo(), loadCardsData()])
.then(([userData, cards]) => {
  updateProfile(userData);
  cards.forEach(function (item) {
    createPlaceCard(item);
  });
}).catch(err => {
  console.log(err);
})

function toggleSaveBtnCaption(caption,btn) {
  btn.value = caption;
}