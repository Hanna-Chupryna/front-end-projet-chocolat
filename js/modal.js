document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".mob-menu");
  const openBtn = document.querySelector(".menu-open-btn");
  const closeBtn = document.querySelector(".menu-close-btn");

  openBtn.addEventListener("click", function () {
    menu.classList.add("is-open");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("is-open");
  });
});
