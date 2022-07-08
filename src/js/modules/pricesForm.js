export const priceFrom = () => {
  // console.log('price select');
  const price = 250;
  const priceItems = document.querySelectorAll('.price__item');

  const popUpSelect = (item) => {
    let itemSrc = item.dataset.src;
    const popUps = document.querySelectorAll('.popUp');

    popUps.forEach((popUp) => {
      //Если ссылка на модалку равна id модалки
      if (itemSrc === `#${popUp.id}`) {
        let popUpBtn = popUp.querySelector('.popUp__btn');

        popUpBtn.addEventListener('click', (e) => {
          let popUpInputValue = popUp.querySelector('.popUp__input').value;

          if (popUpInputValue > 0) {
            item.classList.add('active');
            item.setAttribute('data-select', '1');
            item.querySelector('.additionals__count').innerText = popUpInputValue * price;
            //Отчистка инпута после закрытия окна
            popUpInputValue = '';
          } else if (popUpInputValue == 0 || popUpInputValue == '') {
            item.classList.remove('active');
            item.removeAttribute('data-select');
            item.querySelector('.additionals__count').innerText = '1 шт. / 250';
          }
        });
      }
    });
  };

  priceItems.forEach((priceItem) => {
    const additionalList = priceItem.querySelector('.additionals__list');

    additionalList.addEventListener('click', (e) => {
      const target = e.target;
      let item = target.closest('.additionals__item');

      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.removeAttribute('data-select');
      } else {
        if (item.dataset.additionalName === 'retouch') {
          popUpSelect(item);
        }
        item.classList.add('active');
        item.setAttribute('data-select', '1');
      }
    });
  });
};
