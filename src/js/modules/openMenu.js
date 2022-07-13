const openMenu = () => {
  const headerBtn = document.querySelector('.menu-icon'),
    headerMenu = document.querySelector('.header__menu'),
    body = document.querySelector('body');

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.menu-icon')) {
      toggelMenu();
    }

    if (target.closest('.header__menu')) {
      if (body.offsetWidth < 880) {
        toggelMenu();
      }
    }
  });

  const toggelMenu = () => {
    body.classList.toggle('hidden');
    headerBtn.classList.toggle('open');
    headerMenu.classList.toggle('show');
  };
};

export default openMenu;
