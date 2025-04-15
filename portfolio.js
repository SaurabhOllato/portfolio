window.onload = function () {
    const phrases = ["artwork", "editorial", "motion"];
    let index = 0, char = 0, current = "", typing = true;
  
    function typeEffect() {
      if (typing) {
        if (char < phrases[index].length) {
          current += phrases[index][char++];
          document.getElementById("typingText").innerText = current;
          setTimeout(typeEffect, 100);
        } else {
          typing = false;
          setTimeout(typeEffect, 1000);
        }
      } else {
        if (char > 0) {
          current = current.slice(0, --char);
          document.getElementById("typingText").innerText = current;
          setTimeout(typeEffect, 50);
        } else {
          typing = true;
          index = (index + 1) % phrases.length;
          setTimeout(typeEffect, 500);
        }
      }
    }
  
    typeEffect();
  };
  
  
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
        640: {
          coverflowEffect: {
            rotate: 5,
            stretch: -50,
            depth: 150,
            modifier: 1.5,
          }
        },
        1024: {
          coverflowEffect: {
            rotate: 10,
            stretch: -80,
            depth: 200,
            modifier: 1,
          }
        }
      }
    });
  });
  

