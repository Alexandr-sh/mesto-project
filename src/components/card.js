//Создание новой карточки
export function createPlaceCard(cardData) {
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