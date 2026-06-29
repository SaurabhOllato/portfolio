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
        slideShadows: false,
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

  if (isTouchDevice) return;

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
