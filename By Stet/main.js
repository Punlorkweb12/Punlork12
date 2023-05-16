//swiper
var swiper = new Swiper(".home",{ 
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
    });
    let menu=document.querySelector('#menu-icon');
    let navber=document.querySelector('.navber');

    menu.onclik = () =>{
      menu.classList.toggle('bx-x');
      navber.classList.toggle('active');
    }
    menu.onclik = () =>{
      menu.classList.remove('bx-x');
      navber.classList.remove('active');
    }