 // sales slide 
      var swiper = new Swiper(".mySlide", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 6,
    },
  
  },
      });

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      let mobile = document.querySelector(".mobile");
      let menuImg = document.querySelector(".menuImg");
      let closeMobile = document.querySelector(".closeMobile");
      let popUp = document.querySelector(".popUp");
      let navLink = document.querySelectorAll(".mobile .container .nav li a")
      let closePopUp = document.querySelector(".closePopUp");
      let goTop = document.querySelector(".goTop");

      menuImg.onclick = () =>{
        mobile.classList.add("active");
      }
      closeMobile.onclick = () =>{
        mobile.classList.remove("active");
      }
      navLink.forEach(link =>{
        link.onclick = () =>{
          mobile.classList.remove("active");
        }
      })
      window.onload = () =>{
        popUp.classList.add("active");
      }
      closePopUp.onclick = () =>{
        popUp.classList.remove("active");
      }
      popUp.onclick = () =>{
        popUp.classList.remove("active");
      }
     
      window.onscroll = () =>{
        popUp.classList.remove("active");
        if (window.scrollY > 150) {
          goTop.classList.add("active");
        } else { 
          goTop.classList.remove("active");
          
        }
      }