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
  popups.forEach(function (item) {
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

//Создание новой карточки
function createPlaceCard() {
  const cardTemplate = document.querySelector('#place-card').content;
  const card = cardTemplate.querySelector('.elements__element').cloneNode(true);

  //Добавление реакции на нажатие кнопки лайк
  const likeBtn = card.querySelector('.elements__ico');
  likeBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__ico_active');
  })

  //Добавление реакции на нажатие кнопки удалить
  const delBtn = card.querySelector('.elements__del-ico');
  delBtn.addEventListener('click', function(evt){
    evt.target.closest('.elements__element').remove();
  })

  //Добавление реакции на нажатие на карточку
  card.addEventListener('click',function(evt){
    const imgPopup = document.querySelectorAll('.popup')[2];
    imgPopup.classList.add('popup_opened');
    imgPopup.querySelector('.popup__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
  })

  return card;
}

//Заполняем секцию карточками
initialCards.forEach(function (item) {
  let card = createPlaceCard();
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
  const card = createPlaceCard();
  const name = newPlaceForm.querySelectorAll('.popup__text')[0];
  const link = newPlaceForm.querySelectorAll('.popup__text')[1]
  card.querySelector('.elements__image').style.backgroundImage = `url("${link.value}")`;
  card.querySelector('.elements__title').textContent = `${name.value}`;
  name.value = '';
  link.value = '';
  places.prepend(card);
  closePopup();
}
newPlaceForm.addEventListener('submit', newPlaceFormSave);


//Открытие попапа с картинкой

