const mobileNav = () => {
  const mobileBars = document.querySelector(".header__bars");
  const mobileMenu = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile__link");

  let isSelected = false;
  mobileBars.addEventListener("click", () => {
    isSelected = !isSelected;
    if (isSelected) {
      mobileMenu.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileMenu.style.display = "none";
      document.body.styles.overflowY = "scroll";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isSelected = false;
      document.body.style.overflowY = "auto";
      mobileMenu.style.display = "none";
    });
  });
};

export default mobileNav;
