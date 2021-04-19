const imgSlider = (anything) => {
  document.querySelector(".pepsi").src = anything;
};

const changeBgColor = (color) => {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
};

const menuToggle = () => {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
};
