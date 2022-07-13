const selectLocation = () => {
  // console.log('selections');

  const selectorBox = document.querySelector('.selector__box'),
    selectorOptions = document.querySelector('.selector__options'),
    selectorItems = document.querySelectorAll('.selector__item');

  const showItems = () => {
    selectorBox.classList.toggle('show');
    selectorOptions.classList.toggle('show');
  };

  selectorBox.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.selector__box')) {
      showItems();
    }
  });

  selectorItems.forEach((item) => {
    item.addEventListener('click', () => {
      const text = item.innerText;

      selectorBox.innerText = text;
      selectorBox.classList.add('selector__selected');

      showItems();
    });
  });
};

export default selectLocation;
