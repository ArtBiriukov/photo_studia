//Карты
const map = () => {
  function mapInit() {
    let map = new ymaps.Map('map', {
      center: [55.80892347253291, 37.52779156834339],
      zoom: 17,
    });

    let myPlacemark = new ymaps.Placemark(
      [55.80826942592592, 37.52762258917546], // координаты маркера
      {
        iconContent: `<div class="marker">
                        <img src="../images/logo_marker.svg" alt="logo" class="marker__logo">
                        <div class="marker__content">
                          <p class="marker__text">+7 (499) 999 99 99</p>
                          <p class="marker__text">content@addmarkets.ru</p>
                          <p class="marker__text">Режим работы: ПН-ПТ 09:00 - 18:00</p>
                        </div>
                      </div>`,
      }, // контент маркера
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        // Размеры метки.
        iconImageSize: [1, 1],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-100, -225],
      }
    );

    map.geoObjects.add(myPlacemark);
  }

  ymaps.ready(mapInit);
};

export default map;
