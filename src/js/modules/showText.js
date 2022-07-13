const showText = () => {
  const textBlocks = document.querySelectorAll('.textblock');

  textBlocks.forEach((textBlock) => {
    let text = textBlock.querySelector('.textblock__text'),
      showText = textBlock.querySelector('.show-text'),
      button = textBlock.querySelector('.textblock__btn'),
      textContent = text.innerText;

    //Вся высота текстового блока
    let heightDefult = text.clientHeight;

    //Длина символов блока который должен быть показан
    let lengthTextShow = showText.innerText.length;

    //Если длина больше чем нужна то добавляем ...
    if (textContent.length > 200) {
      text.innerText = textContent.substr(0, lengthTextShow) + ' ...';
    }

    //Высота блока который показывается в скрытом состоянии
    let heightNew = text.clientHeight;
    text.style.height = `${heightNew}px`;

    button.addEventListener('click', () => {
      if (!button.classList.contains('show')) {
        text.style.height = `${heightDefult}px`;
        text.innerText = textContent;

        button.classList.add('show');
        button.children[0].innerText = 'Скрыть';
      } else {
        text.style.height = `${heightNew}px`;

        if (textContent.length > 200) {
          text.innerText = textContent.substr(0, lengthTextShow) + ' ...';
        }

        button.classList.remove('show');
        button.children[0].innerText = 'Подробнее';
      }
    });
  });
};

export default showText;
