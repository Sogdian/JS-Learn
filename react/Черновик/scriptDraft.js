const placesList = document.querySelector('.places__list');

function addCard(initialCard, removeCardCallback) {
  const cardTemplate = document.querySelector('#card-template').content;
  const placesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = placesItem.querySelector('.card__delete-button');

  placesItem.querySelector('.card__image').src = initialCard.link;
  placesItem.querySelector('.card__image').alt = initialCard.name;

  function removeCard() {
    placesItem.remove();
    // Вызывайте колбэк только после удаления карточки
    removeCardCallback();
  }

  cardDeleteButton.addEventListener('click', removeCard);

  placesList.append(placesItem);
}

function removeCard() {
  this.parentNode.parentNode.remove(); // Мы используем this, чтобы получить кнопку, а затем поднимаемся на два уровня вверх, чтобы удалить соответствующий элемент placesItem
}

initialCards.forEach((item) => {
  addCard(item, removeCard);
});
