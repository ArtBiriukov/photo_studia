const smoothScroll = (el) => {
  const menuEl = document.querySelectorAll(el);

  menuEl.forEach((navItem) =>
    navItem.addEventListener('click', (event) => {
      event.preventDefault();

      const scrolling = (item) => {
        const itemHash = item.getAttribute('href');

        if (itemHash) {
          document.querySelector('' + itemHash).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

      if (event.target.parentNode.nodeName === 'A') {
        scrolling(event.target.parentNode);
      } else {
        scrolling(event.target);
      }
    })
  );
};

export default smoothScroll;
