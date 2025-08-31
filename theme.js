const modeToggle = document.getElementById("modeToggle");
const themeSelector = document.getElementById("themeSelector");
const body = document.body;

// Toggle Light/Dark Mode
modeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    modeToggle.textContent = "☀️";
  } else {
    body.classList.replace("dark-mode", "light-mode");
    modeToggle.textContent = "🌙";
  }
});

// Change Theme Color
themeSelector.addEventListener("change", (e) => {
  body.classList.remove("theme-red", "theme-blue", "theme-gray");
  body.classList.add(e.target.value);
});
