//Выбор кнопки "редактирование"
let editBtn = document.querySelector('.profile__edit-button');

//Выбор popup окна
let popup = document.querySelector('.popup');

//Выбор полей ввода
let popup_name = document.querySelectorAll('.popup__text')[0];
let popup_description = document.querySelectorAll('.popup__text')[1];

//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click',function(){
    popup.classList.add('popup_opened');
    popup_name.value='Жак-Ив Кусто';
    popup_description.value='Исследователь океана';
});

//Выбор кнопки "закрытие"
let closeBtn = document.querySelector('.popup__close-button');

//Добавление реакции на нажатие кнопки "закрытие"
function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click',closePopup);

//Выбор кнопки "сохранить"
let saveBtn = document.querySelector('.popup__save-button');

//Выбор элементов имя профиля и описание профиля
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

//Выбор формы
let form = document.querySelector('.popup__container');

//Добавление реакции на нажатие кнопки сохранить
function popup_save(event) {
    event.preventDefault();
    profileName.textContent = popup_name.value;
    profileDescription.textContent = popup_description.value;
    closePopup();
}
form.addEventListener('submit',popup_save);