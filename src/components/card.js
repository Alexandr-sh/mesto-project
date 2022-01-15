import {openPopup} from "./modal.js";
import {imgPopup, userName, places} from "./index.js";
import { requestDelCard, requestPutLike } from "./api.js";


//Создание новой карточки
export function createPlaceCard(cardData) {
    const cardTemplate = document.querySelector('#place-card').content;
    const card = cardTemplate.querySelector('.elements__element').cloneNode(true);

    card.querySelector('.elements__image').style.backgroundImage = `url(${cardData.link})`;
    card.querySelector('.elements__title').textContent = cardData.name;
    card.querySelector('.elements__likes-count').textContent = cardData.likes.length;
    card._id = cardData._id;

    if (cardData.owner.name != userName) {
      card.querySelector('.elements__del-ico').style.display = "none";
    }
  
    //Добавление реакции на нажатие кнопки лайк
    const likeBtn = card.querySelector('.elements__ico');
    likeBtn.addEventListener('click', function (evt) {
      likeBtn.classList.toggle('elements__ico_active');
      if (likeBtn.classList.contains('elements__ico_active')){
        requestPutLike(card._id).then(res => {
          if (res.ok){
            console.log(res);
            return;
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        }).catch(err => {
          console.log(err);
        })
      }
    })
  
    //Добавление реакции на нажатие кнопки удалить
    const delBtn = card.querySelector('.elements__del-ico');
    delBtn.addEventListener('click', function(evt){
      requestDelCard(card._id).then(res => {
        if (res.ok){
          evt.target.closest('.elements__element').remove();
          return;
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      }).catch(err => {
        console.log(err);
      })
    })
  
    //Добавление реакции на нажатие на карточку
    card.querySelector('.elements__image').addEventListener('click',function(evt){
      openPopup(imgPopup);
      const img = imgPopup.querySelector('.popup__image');
      img.src = cardData.link;
      img.alt = cardData.name;
      imgPopup.querySelector('.popup__caption').textContent = cardData.name;/*.popup__image и .popup__caption разные элементы*/
    })
  
    places.prepend(card);
  }