const changePhotos = () => {
  // console.log('changephotos');

  const servicPhotos = document.querySelectorAll('.services__photo > img');

  servicPhotos.forEach((item) => {
    const itemImg = item.src;
    const obj = item.dataset;

    //Пустой массив
    if (Object.keys(obj).length !== 0) {
    }
  });
};

export default changePhotos;
