//Работа формы "Редактировать профиль"
//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окон
const addCardPopup = document.querySelector('.popup_type_add-card');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const imgPopup = document.querySelector('.popup_type_img');

//Выбор кнопок закрытия попап окон
const addCardCloseButton = addCardPopup.querySelector('.popup__close-button');
const editProfileCloseButton = editProfilePopup.querySelector('.popup__close-button');
const imgPopupCloseButton = imgPopup.querySelector('.popup__close-button');

addCardCloseButton.addEventListener('click',() => closePopup(addCardPopup));

editProfileCloseButton.addEventListener('click',function() {
  closePopup(editProfilePopup);
});

imgPopupCloseButton.addEventListener('click', function() {
  closePopup(imgPopup);
})

//Выбор полей ввода
const popupProfileName = document.querySelector('.popup__profile-name');
const popupProfileDescription = document.querySelector('.popup__profile-description');

//Функции открытия и закрытия попап окон
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click', function () {
  openPopup(editProfilePopup);
  popupProfileName.value = profileName.textContent;
  popupProfileDescription.value = profileDescription.textContent;
});

//Выбор кнопки "сохранить"
const saveBtn = document.querySelector('.popup__save-button');

//Выбор элементов имя профиля и описание профиля 
const profileName = document.querySelector('.profile__name'); 
const profileDescription = document.querySelector('.profile__description');

//Выбор форм
const profileForm = document.querySelector('.popup_type_edit-profile').querySelector('.popup__container');
const placeForm = document.querySelector('.popup_type_add-card').querySelector('.popup__container');

//Добавление реакции на нажатие кнопки сохранить
function savePopupProfile(event) {
  event.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  closePopup(editProfilePopup);
}
profileForm.addEventListener('submit', savePopupProfile);


//Получение секции с карточками мест
const places = document.querySelector('.elements');

//Создание новой карточки
function createPlaceCard(cardData) {
  const cardTemplate = document.querySelector('#place-card').content;
  const card = cardTemplate.querySelector('.elements__element').cloneNode(true);

  card.name = cardData.name;
  card.link = cardData.link;

  card.querySelector('.elements__image').style.backgroundImage = `url(${card.link})`;
  card.querySelector('.elements__title').textContent = card.name;

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
  card.querySelector('.elements__image').addEventListener('click',function(evt){
    openPopup(imgPopup);
    const img = imgPopup.querySelector('.popup__image');
    img.src = card.link;
    img.alt = card.name;
    imgPopup.querySelector('.popup__caption').textContent = card.name;
  })

  return card;
}


//Заполняем секцию карточками
initialCards.forEach(function (item) {
  const card = createPlaceCard(item);
  places.append(card);
})


//Работа формы "Новое место"
//выбор кнопки "добавить место"
const addPlaceBtn = document.querySelector('.profile__add-button');


//Выбор полей ввода
const newPlaceFormName = document.querySelector('.popup__place-name');
const newPlaceFormDescription = document.querySelector('.popup__place-link');

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


