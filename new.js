// Плавное появление контента при загрузке
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".main-content") || document.body;
  if (!content.classList.contains("fade-in")) {
    content.classList.add("fade-in");
  }
});

// Плавный переход между страницами
function navigateTo(url) {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// Функция для информации
function showInfo(topic) {
  alert(`Вы выбрали: ${topic}. Подробности — скоро`);
}

// Управление слайдером
let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  slideIndex = (slideIndex + n + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}

// Инициализация слайдера
window.onload = function () {
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? "block" : "none";
    });
  }
}