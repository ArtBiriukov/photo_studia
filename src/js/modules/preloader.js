const preloader = () => {
  const preloaderEl = document.createElement('div');
  const body = document.querySelector('body');

  preloaderEl.innerHTML = `<div class="preloader"><div class="spinner"></div></div>`;

  body.style.overflow = 'hidden';
  body.append(preloaderEl);

  window.onload = function () {
    body.style.overflow = '';
    preloaderEl.remove();
  };
};

export default preloader;
