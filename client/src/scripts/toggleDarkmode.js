export default function DarkModeToggle() {
  console.log("DarkModeToggle script is working");
  var themeToggleDarkIcon = document.getElementById("theme-toogle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  //change icons inside the button based on previous settings

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("prefers-color-scheme: dark").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  //find toggle btn
  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", () => {
    console.log('TOOGLE BTN CLICKED')
    //toogle icons inside btn
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle('hidden')

    //set via local storage's previous settings
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      //else set previous localStorage values
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
}
