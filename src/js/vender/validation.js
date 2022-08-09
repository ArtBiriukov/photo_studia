import JustValidate from 'just-validate';
import IMask from 'imask';

let maskOptions = {
  mask: '+{7}(000)000-00-00',
};

export const validation = () => {
  const popUpInput = document.querySelectorAll('.popUp__input');

  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const formBtn = form.querySelector('.btn');

    formBtn.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

  console.log(popUpInput);

  // const formTest = document.querySelector('.backvoice__form');
  // const telInput = formTest.querySelector('[name="tel"]');

  // console.log(telInput);

  // let mask = IMask(telInput, maskOptions);
};
