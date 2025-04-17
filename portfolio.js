window.onload = function () {
    const phrases = ["content creation", "video $ photo editing", "motion"];
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
  

  
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust this value based on when you want the effect to trigger
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });


  window.addEventListener("scroll", () => {
    const wanted = document.getElementById("wantedText");
    const scrollY = window.scrollY;
    wanted.style.transform = `translateY(${scrollY * -0.2}px)`; // move slightly upward
  });
  // window.addEventListener("scroll", () => {
  //   const wantedText = document.getElementById("wantedText");
  //   const scrollY = window.scrollY;
  //   // Move the text up at half the scroll speed
  //   wantedText.style.transform = `translateY(-${scrollY * 0.3}px)`;
  // });

// document.querySelector('.hover-scroll-section').addEventListener('mousemove', (e) => {
//     gsap.to("#wantedText", {
//       x: (e.clientX - window.innerWidth/2) * 0.02,
//       y: (e.clientY - window.innerHeight/2) * 0.02,
//       scale: 1.05,
//       opacity: 0.03,
//       duration: 0.5,
//       ease: "power2.out"
//     });
//   });
  
//   // Reset on mouse leave
//   document.querySelector('.hover-scroll-section').addEventListener('mouseleave', () => {
//     gsap.to("#wantedText", {
//       x: 0,
//       y: 0,
//       scale: 1,
//       opacity: 0.01,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.5)"
//     });
//   });
