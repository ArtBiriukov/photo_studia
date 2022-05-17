const modalWindows = (targetBtn, window) => {
  const btn = document.querySelectorAll(targetBtn);
  const modal = document.querySelector(window);
  const overlay = document.querySelector('.overlay');
  const close = modal.querySelector('.modal__close');

  const removeClass = () => {
    modal.classList.remove('show');
    overlay.classList.remove('show');
  }

  btn.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.add('show');
      overlay.classList.add('show');
    })

    close.addEventListener('click', () => {
      removeClass();
    })

    overlay.addEventListener('click', () => {
      removeClass();
    })

  });

}

export default modalWindows;