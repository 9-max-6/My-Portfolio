const lightMode = () => {
  const toggleButton = document.querySelectorAll(".toggle");

  //state
  const theme = localStorage.getItem("theme");
  //on mount-- something that happens when a person visits a page.
  theme && document.body.classList.add(theme);

  const handleThemeToggle = () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
      localStorage.setItem("theme", "lightmode");
    } else {
      localStorage.removeItem("theme");
    }
  };

  toggleButton.forEach((btn) => {
    btn.addEventListener("click", handleThemeToggle);
  });
};

export default lightMode;
