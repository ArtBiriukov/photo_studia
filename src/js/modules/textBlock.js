const textBlock = () => {
  let textBloks = document.querySelectorAll('.textblock__text');

  let textButtons = document.querySelectorAll('.textblock__btn');

  textButtons.forEach(button => {
    button.addEventListener('click', (e) => {

      console.dir(button);


    })

    textBloks.forEach(textBlock => {
      // console.dir(textBlock)
      let textContent = textBlock.innerText;

      if (textContent.length >= 470) {

        textBlock.innerText = textContent.substr(0, 470) + '...';

      }
    })
  })

};

export default textBlock;