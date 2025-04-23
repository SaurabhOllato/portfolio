// window.onload = function () {
//   const phrases = ["content creation", "video $ photo editing", "motion"];
//   let index = 0, char = 0, current = "", typing = true;

//   function typeEffect() {
//     if (typing) {
//       if (char < phrases[index].length) {
//         current += phrases[index][char++];
//         document.getElementById("typingText").innerText = current;
//         setTimeout(typeEffect, 100);
//       } else {
//         typing = false;
//         setTimeout(typeEffect, 1000);
//       }
//     } else {
//       if (char > 0) {
//         current = current.slice(0, --char);
//         document.getElementById("typingText").innerText = current;
//         setTimeout(typeEffect, 50);
//       } else {
//         typing = true;
//         index = (index + 1) % phrases.length;
//         setTimeout(typeEffect, 500);
//       }
//     }
//   }

//   typeEffect();
// };






window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 5) { // Adjust this value based on when you want the effect to trigger
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      
        0: {
          coverflowEffect: {
            rotate: 0,
            stretch: -20,
            depth: 20,
            modifier: 1.2,
          },
          slidesPerView: 1.2,
        },
        640: {
          coverflowEffect: {
            rotate: 5,
            stretch: -50,
            depth: 150,
            modifier: 1.5,
          },
          slidesPerView: 'auto',
        },
        1024: {
          coverflowEffect: {
            rotate: 10,
            stretch: -80,
            depth: 200,
            modifier: 1,
          },
          slidesPerView: 'auto',
        }
      
      
      
    }
  });
});


  const reelsSwiper = new Swiper(".reelsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });



// new FinisherHeader({
//   "count": 5,
//   "size": {
//     "min": 900,
//     "max": 1500,
//     "pulse": 0
//   },
//   "speed": {
//     "x": {
//       "min": 0,
//       "max": 0.3
//     },
//     "y": {
//       "min": 0,
//       "max": 0
//     }
//   },
//   "colors": {
//     "background": "#6f15c4",
//     "particles": [
//       "#350a5e"
//     ]
//   },
//   "blending": "lighten",
//   "opacity": {
//     "center": 0.15,
//     "edge": 0.05
//   },
//   "skew": -2,
//   "shapes": [
//     "s"
//   ]
// });