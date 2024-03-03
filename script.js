const header = document.querySelector("#header");
let isMenuExpanded = false;

const handleOpenMenu = function (e) {
  const clickTarget = e.target.closest(".burger");
  const menu = document.querySelector(".menu");
  //   const overlay = document.querySelector(".menu-overlay");

  if (clickTarget) {
    isMenuExpanded = !isMenuExpanded;
    menu.setAttribute("aria-expanded", isMenuExpanded);
    header.setAttribute("menu-open", isMenuExpanded);
  }
};

header.addEventListener("click", handleOpenMenu);
