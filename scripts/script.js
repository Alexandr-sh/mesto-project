//Выбор кнопки "редактирование"
let editBtn = document.querySelector('.profile__edit-button');
//Выбор popup окна
let popup = document.querySelector('.popup');

//Добавление реакции на нажатие кнопки "редактирование"
editBtn.addEventListener('click',function(){
    popup.classList.add('popup_opened');
});

//Выбор кнопки "закрытие"
let closeBtn = document.querySelector('.popup__close-button');
//Добавление реакции на нажатие кнопки "закрытие"
function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click',closePopup);