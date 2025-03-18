document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".backdrop");
  const openBtn = document.querySelector(".loved-btn");
  const closeBtn = document.querySelector(".modal-btn");

  openBtn.addEventListener("click", function () {
    menu.classList.add("is-open");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("is-open");
  });
});
