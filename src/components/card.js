import { openPopup } from "./modal.js";
import { imgPopup, userName, places } from "./index.js";
import { requestDelCard, requestPutLike, loadCardsData, requestDeleteLike } from "./api.js";


//Создание новой карточки
export function createPlaceCard(cardData) {
  const cardTemplate = document.querySelector('#place-card').content;
  const card = cardTemplate.querySelector('.elements__element').cloneNode(true);
  const likeBtn = card.querySelector('.elements__ico');
  const likesCount = card.querySelector('.elements__likes-count');

  card.querySelector('.elements__image').style.backgroundImage = `url(${cardData.link})`;
  card.querySelector('.elements__title').textContent = cardData.name;
  likesCount.textContent = cardData.likes.length;
  card._id = cardData._id;

  if (cardData.owner.name != userName) {
    card.querySelector('.elements__del-ico').style.display = "none";
  }

  //Закрашивание кнопки лайк если мы на нее ранее лайкали
  cardData.likes.forEach(user => {
    if (user.name === userName) {
      likeBtn.classList.add('elements__ico_active');
    }
  })

  //Добавление реакции на нажатие кнопки лайк
  likeBtn.addEventListener('click', function (evt) {
    if (!likeBtn.classList.contains('elements__ico_active')) {
      requestPutLike(card._id).then(res => {
        likeBtn.classList.add('elements__ico_active');
        setLikes(res.likes.length, likesCount);
      }).catch(err => {
        console.log(err);
      })
    }
    else {
      requestDeleteLike(card._id).then(res => {
        likeBtn.classList.remove('elements__ico_active');
        setLikes(res.likes.length, likesCount);
      }).catch(err => {
        console.log(err);
      })
    }
  })

  //Добавление реакции на нажатие кнопки удалить
  const delBtn = card.querySelector('.elements__del-ico');
  delBtn.addEventListener('click', function (evt) {
    requestDelCard(card._id).then(res => {
      evt.target.closest('.elements__element').remove();
    }).catch(err => {
      console.log(err);
    })
  })

  //Добавление реакции на нажатие на карточку
  card.querySelector('.elements__image').addEventListener('click', function (evt) {
    openPopup(imgPopup);
    const img = imgPopup.querySelector('.popup__image');
    img.src = cardData.link;
    img.alt = cardData.name;
    imgPopup.querySelector('.popup__caption').textContent = cardData.name;/*.popup__image и .popup__caption разные элементы*/
  })

  places.prepend(card);
}

//Получение колличества лайков
function setLikes(count, likesCountElement) {
  likesCountElement.textContent = count;
}