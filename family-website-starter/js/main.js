const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeButton = document.getElementById("themeButton");

menuToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));

const savedTheme = localStorage.getItem("family-theme");
if (savedTheme === "dark") document.body.classList.add("dark");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("family-theme", document.body.classList.contains("dark") ? "dark" : "light");
});
