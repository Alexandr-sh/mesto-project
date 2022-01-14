import '../index.css';


import { enableValidation } from './validate.js';
import {initialCards} from './initial-cards.js';
import { createPlaceCard } from './card.js';
import { closePopup } from './modal.js';
import { openPopup } from './modal.js';
import { closeAllPopup } from './modal.js';


//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окон
const addCardPopup = document.querySelector('.popup_type_add-card');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
export const imgPopup = document.querySelector('.popup_type_img');
export const popups = [addCardPopup, editProfilePopup, imgPopup];

//Выбор кнопок закрытия попап окон
const addCardCloseButton = addCardPopup.querySelector('.popup__close-button');
const editProfileCloseButton = editProfilePopup.querySelector('.popup__close-button');
const imgPopupCloseButton = imgPopup.querySelector('.popup__close-button');

//Выбор полей ввода
const popupProfileName = document.querySelector('.popup__profile-name');
const popupProfileDescription = document.querySelector('.popup__profile-description');

//Получение секции с карточками мест
const places = document.querySelector('.elements');

//Выбор элементов имя профиля и описание профиля 
const profileName = document.querySelector('.profile__name'); 
const profileDescription = document.querySelector('.profile__description');

//Выбор форм
const profileForm = document.querySelector('.popup_type_edit-profile').querySelector('.popup__container');
const placeForm = document.querySelector('.popup_type_add-card').querySelector('.popup__container');
export const forms = [profileForm,placeForm];

//выбор кнопки "добавить место"
const addPlaceBtn = document.querySelector('.profile__add-button');



addCardCloseButton.addEventListener('click',() => closePopup(addCardPopup));

editProfileCloseButton.addEventListener('click',function() {
  closePopup(editProfilePopup);
});

imgPopupCloseButton.addEventListener('click', function() {
  closePopup(imgPopup);
})



//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click', function () {
  openPopup(editProfilePopup);
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
});


profileForm.addEventListener('submit', savePopupProfile);

//Добавление реакции на нажатие кнопки сохранить
export function savePopupProfile(event) {
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


//Добавление реакции на нажатие кнопки "Добавить место"
addPlaceBtn.addEventListener('click', function () {
  openPopup(addCardPopup);
});

//Добавление реакции на нажатие кнопки сохранить
function saveNewPlaceForm(event) {
  event.preventDefault();
  const name = placeForm.querySelector('.popup__text_type_card-name');
  const link = placeForm.querySelector('.popup__text_type_card-link');
  const cardData = {};
  cardData.name = name.value;
  cardData.link = link.value;
  const card = createPlaceCard(cardData);
  card.querySelector('.elements__image').style.backgroundImage = `url("${cardData.link}")`;
  card.querySelector('.elements__title').textContent = `${cardData.name}`;
  places.prepend(card);
  placeForm.reset();
  closePopup(addCardPopup);
}
placeForm.addEventListener('submit', saveNewPlaceForm);



enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_active'
}); 

/*document.addEventListener('keydown', function (evt) {
  if(evt.keyCode===27){
    closeAllPopup();
  }
});*/

export function closePopupEsc(evt){
  if(evt.keyCode===27){
    closeAllPopup();
  }
}

export function closePopupMC(evt){
  if (evt.target.classList.contains('popup')){
    closeAllPopup();
  }
}


