export const priceFrom = () => {
  // console.log('price select');
  const priceItems = document.querySelectorAll('.price__item');

  priceItems.forEach((priceItem) => {
    const additionalList = priceItem.querySelectorAll('.additionals__item');

    additionalList.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target;

        // target.classList.add('active');

        if (target.dataset.additionalName === 'retouch') {
          console.log(target);
        }
      });
    });
  });
};
