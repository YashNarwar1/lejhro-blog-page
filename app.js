document.addEventListener("DOMContentLoaded", function () {
  const sideNav = document.querySelector(".side-bar");
  const openNav = document.querySelector("#side-menu");
  const closeNav = document.querySelector("#close");
  const backdrop = document.getElementById("backdrop");
  const body = document.querySelector("body");

  openNav.addEventListener("click", () => {
    sideNav.classList.add("opened");
    backdrop.style.display = "block";
    body.classList.add("opened");
  });

  closeNav.addEventListener("click", () => {
    sideNav.classList.remove("opened");
    backdrop.style.display = "none";
    body.classList.remove("opened");
  });
});
