const selectLocation = () => {
  // console.log('selections');

  const formLocation = document.querySelector('#form__location');
  const selectWrapper = formLocation.querySelector('.select');
  const selectList = formLocation.querySelector('.select__list');
  const selectBtn = formLocation.querySelector('.select__btn');

  const openSelect = () => {
    selectBtn.classList.toggle('show');
    selectList.classList.toggle('show');
  };

  selectWrapper.addEventListener('click', (e) => {
    const target = e.target;
    openSelect();

    if (target.classList.contains('select__item')) {
      let text = target.innerText;

      selectBtn.innerText = text;
      openSelect();
    }
  });
};

export default selectLocation;
