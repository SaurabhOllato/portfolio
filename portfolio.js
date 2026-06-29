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

// window.addEventListener("scroll", function () {
//   const navbar = document.getElementById("navbar");
//   if (window.scrollY > 5) {
//     // Adjust this value based on when you want the effect to trigger
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 2,
//       slideShadows: true,
//     },
//     loop: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 0,
//           depth: 50,
//           modifier: 1,
//           slideShadows: false,
//         },
//       },
//       480: {
//         slidesPerView: 1.2,
//         coverflowEffect: {
//           rotate: 0,
//           stretch: -20,
//           depth: 60,
//           modifier: 1.2,
//           slideShadows: true,
//         },
//       },
//       768: {
//         slidesPerView: "auto",
//         coverflowEffect: {
//           rotate: 5,
//           stretch: -50,
//           depth: 150,
//           modifier: 1.5,
//         },
//       },
//       1024: {
//         slidesPerView: "auto",
//         coverflowEffect: {
//           rotate: 10,
//           stretch: -80,
//           depth: 200,
//           modifier: 1,
//         },
//       },
//     },

//   });
// });

// const reelsSwiper = new Swiper(".reelsSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });

// const swiper = new Swiper('.reelsSwiper', {
//   slidesPerView: 1.2,
//   spaceBetween: 16,
//   loop: true,
//   grabCursor: true,
//   centeredSlides: true,

//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//     1440: {
//       slidesPerView: 4,
//     },
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

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
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  speed: 750,
  watchSlidesProgress: true,
  coverflowEffect: {
    rotate: 46,
    stretch: -18,
    depth: 180,
    modifier: 1.2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      coverflowEffect: {
        rotate: 24,
        stretch: -8,
        depth: 140,
        modifier: 1.15,
        slideShadows: true,
      },
    },
    768: {
      coverflowEffect: {
        rotate: 36,
        stretch: -14,
        depth: 170,
        modifier: 1.15,
        slideShadows: true,
      },
    },
    1024: {
      coverflowEffect: {
        rotate: 48,
        stretch: -24,
        depth: 220,
        modifier: 1.25,
        slideShadows: true,
      },
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".simpleSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    speed: 650,
    pagination: {
      el: ".reels-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".reels-button-next",
      prevEl: ".reels-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 24,
      },
      640: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 28,
      },
      768: {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
      },
    },
  });
});

// email
// const form = document.getElementById("contact-form");
// const status = document.getElementById("form-status");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   const response = await fetch("https://formspree.io/f/manjovkk", {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   if (response.ok) {
//     status.classList.remove("hidden");
//     form.reset();
//   } else {
//     status.textContent = "Oops! Something went wrong.";
//     status.classList.remove("hidden");
//     status.classList.add("text-red-400");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".swiper-slide");
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  const showPreview = (video, thumbnail) => {
    video.classList.add("opacity-100");
    thumbnail.classList.add("opacity-0");
    video.play().catch((err) => {
      console.warn("Autoplay blocked:", err.message);
    });
  };

  const hidePreview = (video, thumbnail) => {
    video.pause();
    video.currentTime = 0;
    video.classList.remove("opacity-100");
    thumbnail.classList.remove("opacity-0");
  };

  blocks.forEach((block) => {
    const video = block.querySelector(".video-player");
    const thumbnail = block.querySelector(".thumbnail");

    if (!video || !thumbnail) return;

    if (isTouchDevice) {
      showPreview(video, thumbnail);

      setTimeout(() => {
        hidePreview(video, thumbnail);
      }, 8000);
      return;
    }

    block.addEventListener("mouseenter", () => showPreview(video, thumbnail));
    block.addEventListener("mouseleave", () => hidePreview(video, thumbnail));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const socialGroup = document.querySelector(".mobile-socials");
  const socialToggle = document.querySelector(".mobile-social-toggle");

  if (!socialGroup || !socialToggle) return;

  socialToggle.addEventListener("click", () => {
    const isOpen = socialGroup.classList.toggle("is-open");
    socialToggle.setAttribute("aria-expanded", String(isOpen));
  });
});

// spinner

window.addEventListener("load", function () {
  setTimeout(() => {
    const preloader = document.querySelector(".cat");

    if (!preloader) return;

    preloader.classList.add("fade-out");
    setTimeout(() => {
      document.body.classList.remove("is-loading");
      preloader.style.display = "none";
    }, 500);
  }, 2000); // 3000ms = 3 seconds
});
