const showText = () => {
  const textBlocks = document.querySelectorAll('.textblock');


  textBlocks.forEach(textBlock => {

    let text = textBlock.querySelector('.textblock__text'),
      button = textBlock.querySelector('.textblock__btn'),
      textContent = text.innerText;


    // if (textContent.length >= 470) {
    //   text.innerText = textContent.substr(0, 470) + '...';
    // }


    button.addEventListener('click', () => {

      if (button.classList.contains('show')) {
        button.children[0].innerText = 'Показать';
        button.classList.remove('show');
        text.innerText = textContent.substr(0, 470) + '...';

        console.dir(text);
      } else {
        button.children[0].innerText = 'Скрыть';
        button.classList.add('show');

        console.dir(text);

        text.innerText = textContent;
      }
    })


  })

};

export default showText;