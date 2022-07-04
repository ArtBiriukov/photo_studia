import JustValidate from 'just-validate';
import IMask from 'imask';

let maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const validation = () => {
  const popUpInput = document.querySelector('.popUp__input');

  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const formBtn = form.querySelector('.btn');

    formBtn.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
  // console.log(forms);

  // const formTest = document.querySelector('.backvoice__form');
  // const telInput = formTest.querySelector('[name="tel"]');

  // console.log(telInput);

  // let mask = IMask(telInput, maskOptions);
};

export default validation;
