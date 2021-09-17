//Выбор кнопки "редактирование"
const editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окна
const popup = document.querySelector('.popup');

//Выбор полей ввода
const popup_name = document.querySelectorAll('.popup__text')[0];
const popup_description = document.querySelectorAll('.popup__text')[1];

//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click',function(){
    popup.classList.add('popup_opened');
    popup_name.value='Жак-Ив Кусто';
    popup_description.value='Исследователь океана';
});

//Выбор кнопки "закрытие"
const closeBtn = document.querySelector('.popup__close-button');

//Добавление реакции на нажатие кнопки "закрытие"
function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click',closePopup);

//Выбор кнопки "сохранить"
const saveBtn = document.querySelector('.popup__save-button');

//Выбор элементов имя профиля и описание профиля
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Выбор формы
const form = document.querySelector('.popup__container');

//Добавление реакции на нажатие кнопки сохранить
function popup_save(event) {
    event.preventDefault();
    profileName.textContent = popup_name.value;
    profileDescription.textContent = popup_description.value;
    closePopup();
}
form.addEventListener('submit',popup_save);

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

//Получение template элемента карточки
const cardTemplate = document.querySelector('#place-card').content;

//Заполняем секцию карточками
initialCards.forEach (function(item){
    console.log('1');
    // клонируем содержимое тега template
    let card = cardTemplate.querySelector('.elements__element').cloneNode(true);
    card.querySelector('.elements__image').style.backgroundImage = `url(${item.link})`;
    card.querySelector('.elements__title').textContent = item.name;
    places.append(card);
})


