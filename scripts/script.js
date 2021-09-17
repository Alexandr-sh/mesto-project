//Выбор кнопки "редактирование"
let editBtn = document.querySelector('.profile__edit-button');
//Выбор popup окна
let popup = document.querySelector('.popup');

//Реакция на нажатие кнопки "редактирование"
editBtn.addEventListener('click',function(){
    console.log(editBtn.classList);
    popup.classList.add('popup_opened');
})