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

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 5) {
    // Adjust this value based on when you want the effect to trigger
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

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
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
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
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".simpleSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
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
        slidesPerView: 2,
        spaceBetween: 10, // smaller gap
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

const video = document.querySelector(".video-player");

if (window.innerWidth < 1024) {
  // On smaller screens (mobile/tablet)
  video.style.opacity = "1"; // Show video
  video.play().catch((err) => {
    console.warn("Autoplay blocked:", err.message);
  });
}

// email
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/mwpooaje", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    status.classList.remove("hidden");
    form.reset();
  } else {
    status.textContent = "Oops! Something went wrong.";
    status.classList.remove("hidden");
    status.classList.add("text-red-400");
  }
});
