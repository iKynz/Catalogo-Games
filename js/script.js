// MENU

let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')
let menuLogoId = 'menu-logo';
let menuLogoRotateClass = "menu-logo-rotate";

menu.onclick = () => {
    let menuLogoElement = document.getElementById(menuLogoId);  
    navbar.classList.toggle('active');
    menu.classList.toggle('move'); 
    bell.classList.remove('active');
    console.log(menuLogoElement);
    if (menuLogoElement.classList.contains(menuLogoRotateClass)) {
        menuLogoElement.classList.remove(menuLogoRotateClass);
    } else {
        menuLogoElement.classList.add(menuLogoRotateClass);
    }
}

// Notificação

 let bell = document.querySelector('.notification');
     document.querySelector('#bell-icon').onclick = (event) => {
     bell.classList.toggle('active');
     event.target.classList.remove('bx-tada');
    
     
}


// Swiper
 
 var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  