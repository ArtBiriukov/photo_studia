export const priceFrom = () => {
  // console.log('price select');
  const price = 250;
  const priceItems = document.querySelectorAll('.price__item'),
    popUpInput = document.querySelector('.popUp__input'),
    popUpBtn = document.querySelector('.popUp__btn');

  const popUpSelect = (target) => {
    popUpBtn.addEventListener('click', (event) => {
      let value = popUpInput.value;

      if (event.target.closest('.popUp__btn')) {
        if (value > 0) {
          target.classList.add('active');
          target.setAttribute('data-select', '1');

          target.querySelector('.additionals__count').innerText = value * price;

          //Отчистка инпута после закрытия окна
          popUpInput.value = '';
        } else if (value == 0 || value == '') {
          target.classList.remove('active');
          target.removeAttribute('data-select');
          target.querySelector('.additionals__count').innerText = '1 шт. / 250';
        }
      }
    });
  };

  priceItems.forEach((priceItem) => {
    const additionalList = priceItem.querySelectorAll('.additionals__item');

    additionalList.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.active')) {
          target.classList.remove('active');
          target.removeAttribute('data-select');
        } else {
          if (target.dataset.additionalName === 'retouch' || target.closest('span')) {
            popUpSelect(target.closest('.additionals__item'));
          } else {
            target.classList.add('active');
            target.setAttribute('data-select', '1');
          }
        }
      });
    });
  });
};
