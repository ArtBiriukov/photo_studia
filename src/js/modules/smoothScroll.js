const smoothScroll = (el) => {
  const menuEl = document.querySelectorAll(el);

  menuEl.forEach((navItem) =>
    navItem.addEventListener('click', (event) => {
      event.preventDefault();
      const itemHash = event.target.getAttribute('href');

      if (itemHash) {
        document.querySelector('' + itemHash).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    })
  );
};

export default smoothScroll;
