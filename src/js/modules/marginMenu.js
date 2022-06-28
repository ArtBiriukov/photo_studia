const marginMenu = (headerElement, sectionElemet) => {
  const headerMenu = document.querySelector(headerElement).offsetHeight;
  const maniScrean = document.querySelector(sectionElemet);
  maniScrean.style.marginTop = `${headerMenu}px`;

  window.addEventListener('resize', (e) => {
    const headerMenu = document.querySelector(headerElement).offsetHeight;
    maniScrean.style.marginTop = `${headerMenu}px`;
  });
};

export default marginMenu;
