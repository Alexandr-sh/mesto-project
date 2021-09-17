//Работа формы "Редактировать профиль"
//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окна
const popup = document.querySelector('.popup');

//Выбор полей ввода
const popupName = document.querySelectorAll('.popup__text')[0];
const popupDescription = document.querySelectorAll('.popup__text')[1];

//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  popupName.value = 'Жак-Ив Кусто';
  popupDescription.value = 'Исследователь океана';
});

//Выбор кнопки "закрытие"
const closeBtn = document.querySelector('.popup__close-button');

//Добавление реакции на нажатие кнопки "закрытие"
function closePopup() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(function(item){
    item.classList.remove('popup_opened');
  })
}
closeBtn.addEventListener('click', closePopup);

//Выбор кнопки "сохранить"
const saveBtn = document.querySelector('.popup__save-button');

//Выбор элементов имя профиля и описание профиля
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Выбор формы
const form = document.querySelector('.popup__container');

//Добавление реакции на нажатие кнопки сохранить
function popupSave(event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closePopup();
}
form.addEventListener('submit', popupSave);




//Добавление начальных карточек на страницу
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Получение секции с карточками мест
const places = document.querySelector('.elements');

//
const cardTemplate = document.querySelector('#place-card').content;

//Заполняем секцию карточками
initialCards.forEach(function (item) {
  // клонируем содержимое тега template
  let card = cardTemplate.querySelector('.elements__element').cloneNode(true);
  card.querySelector('.elements__image').style.backgroundImage = `url(${item.link})`;
  card.querySelector('.elements__title').textContent = item.name;
  places.append(card);
})


//Работа формы "Новое место"
//выбор кнопки "добавить место"
const addPlaceBtn = document.querySelector('.profile__add-button');

//Выбор формы "Новое место"
const newPlaceForm = document.querySelectorAll('.popup')[1];

//Выбор полей ввода
const newPlaceFormName = newPlaceForm.querySelectorAll('.popup__text')[0];
const newPlaceFormDescription = newPlaceForm.querySelectorAll('.popup__text')[1];

//Добавление реакции на нажатие кнопки "редактирование"
addPlaceBtn.addEventListener('click', function () {
  newPlaceForm.classList.add('popup_opened');
});

//Выбор кнопки "закрытие формы "новое место""
const newPlaceFormСloseBtn = newPlaceForm.querySelector('.popup__close-button');

//Добавление реакции на нажатие кнопки "закрытие"
newPlaceFormСloseBtn.addEventListener('click', closePopup);

//Добавление реакции на нажатие кнопки сохранить
function newPlaceFormSave(event) {
  event.preventDefault();
  
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closePopup();
}
newPlaceForm.addEventListener('submit', popupSave);
