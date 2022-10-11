function showMenu(){
  let menuMobile = document.querySelector('.nav-list-mobile')

  if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = './assets/svg/menu-icon-black-open.svg'
  }else{
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = './assets/svg/menu-icon-black-close.svg'
  }
}