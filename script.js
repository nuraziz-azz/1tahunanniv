// ===========================================
// ANNIVERSARY WEBSITE
// PART 1
// Muhamad Nuraziz ❤️ Nabila Salsabila
// ===========================================

// ================================
// AMBIL SEMUA ELEMENT
// ================================

const pages = document.querySelectorAll(".page");
const openBtn = document.getElementById("openBtn");
const nextButtons = document.querySelectorAll(".nextBtn");
const restartBtn = document.getElementById("restartBtn");

// ================================
// FUNGSI PINDAH HALAMAN
// ================================

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  if (pageId === "letter") {
    startTyping();
  }
}

// ================================
// OPEN BUTTON
// ================================

openBtn.addEventListener("click", () => {
  showPage("letter");
});

// ================================
// NEXT BUTTON
// ================================

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.next;

    showPage(target);
  });
});

// ================================
// RESTART BUTTON
// ================================

restartBtn.addEventListener("click", () => {
  showPage("welcome");
});

// =====================================
// TYPEWRITER EFFECT
// =====================================

const message = `

Happy 1st Anniversary ❤️
Satu tahun telah kita lewati bersama. Terima kasih untuk setiap tawa, pelukan, dan kenangan indah yang telah kita ciptakan. Semoga ini menjadi awal dari perjalanan panjang kita. Aku akan selalu memilihmu, hari ini, esok, dan seterusnya. I love you. ❤️

-Muhamad Nuraziz

`;

const typingText = document.getElementById("typingText");

let typingIndex = 0;

let typingStarted = false;

function startTyping() {
  if (typingStarted) return;

  typingStarted = true;

  function typing() {
    if (typingIndex < message.length) {
      typingText.innerHTML += message.charAt(typingIndex);

      typingIndex++;

      setTimeout(typing, 35);
    }
  }

  typing();
}

// =====================================
// LOVE COUNTER
// =====================================

const relationshipDate = new Date("2025-07-26T00:00:00");

function updateCounter() {
  const now = new Date();

  const difference = now - relationshipDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;

  const minutes = Math.floor(difference / (1000 * 60)) % 60;

  const seconds = Math.floor(difference / 1000) % 60;

  document.getElementById("days").textContent = days;

  document.getElementById("hours").textContent = hours;

  document.getElementById("minutes").textContent = minutes;

  document.getElementById("seconds").textContent = seconds;
}

updateCounter();

setInterval(updateCounter, 1000);

// Ambil elemen slider
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Cek apakah halaman gallery ada
if (sliderTrack && slides.length > 0) {
  let currentSlide = 0;
  let autoSlide;

  // ===============================
  // Update Slider
  // ===============================

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }

  // ===============================
  // Next Slide
  // ===============================

  function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    updateSlider();
  }

  // ===============================
  // Previous Slide
  // ===============================

  function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    updateSlider();
  }

  // ===============================
  // Auto Slide
  // ===============================

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide();

  // ===============================
  // Klik Dot
  // ===============================

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;

      updateSlider();

      stopAutoSlide();

      startAutoSlide();
    });
  });

  // ===============================
  // Swipe HP
  // ===============================

  let startX = 0;
  let endX = 0;

  sliderTrack.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  sliderTrack.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      nextSlide();
    }

    if (endX - startX > 50) {
      prevSlide();
    }

    stopAutoSlide();

    startAutoSlide();
  });

  // ===============================
  // Keyboard Laptop
  // ===============================

  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("gallery").classList.contains("active")) {
      return;
    }

    if (e.key === "ArrowRight") {
      nextSlide();
    }

    if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });

  // ===============================
  // Mouse Drag (Laptop)
  // ===============================

  let isDragging = false;

  sliderTrack.addEventListener("mousedown", (e) => {
    isDragging = true;

    startX = e.clientX;
  });

  sliderTrack.addEventListener("mouseup", (e) => {
    if (!isDragging) return;

    isDragging = false;

    endX = e.clientX;

    if (startX - endX > 50) {
      nextSlide();
    }

    if (endX - startX > 50) {
      prevSlide();
    }
  });

  // Tampilkan slide pertama
  updateSlider();
}

// =====================================
// PART 3
// ANIMASI WEBSITE
// =====================================

// ===============================
// HUJAN HATI
// ===============================

let heartAnimationStarted = false;

function startHearts() {
  if (heartAnimationStarted) return;

  heartAnimationStarted = true;

  const container = document.getElementById("hearts");

  setInterval(() => {
    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";

    heart.style.fontSize = 18 + Math.random() * 25 + "px";

    heart.style.opacity = Math.random();

    heart.style.pointerEvents = "none";

    heart.style.animation = "heartFall 6s linear forwards";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 250);
}

// ===============================
// BINTANG BERKELIP
// ===============================

const stars = document.getElementById("stars");

if (stars) {
  for (let i = 0; i < 120; i++) {
    let star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 5 + "s";

    star.style.animationDuration = 2 + Math.random() * 4 + "s";

    stars.appendChild(star);
  }
}

// ===============================
// GLOW BUTTON
// ===============================

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 0 25px #ff66cc";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "none";
  });
});

// ===============================
// TRANSISI HALAMAN
// ===============================

pages.forEach((page) => {
  page.style.transition = ".6s ease";
});

// ===============================
// EFEK DENYUT LOVE
// ===============================

const love = document.querySelector(".love");

if (love) {
  setInterval(() => {
    love.animate(
      [
        {
          transform: "scale(1)",
        },

        {
          transform: "scale(1.4)",
        },

        {
          transform: "scale(1)",
        },
      ],
      {
        duration: 1000,
      },
    );
  }, 1000);
}

// ===============================
// CSS OTOMATIS
// ===============================

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

@keyframes heartFall{

0%{

transform:translateY(-20px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}



.star{

position:absolute;

width:3px;

height:3px;

background:white;

border-radius:50%;

animation:twinkle infinite;

}



@keyframes twinkle{

0%{

opacity:.2;

transform:scale(.5);

}

50%{

opacity:1;

transform:scale(1.6);

}

100%{

opacity:.2;

transform:scale(.5);

}

}

`;

document.head.appendChild(animationStyle);

// ===============================
// JIKA MASUK HALAMAN TERAKHIR
// ===============================

const endingButton = document.querySelector('[data-next="ending"]');

if (endingButton) {
  endingButton.addEventListener("click", () => {
    setTimeout(() => {
      startHearts();
    }, 500);
  });
}

// =====================================
// PART 3 SELESAI
// =====================================

console.log("❤️ Anniversary Website Loaded Successfully ❤️");
