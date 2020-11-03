const links = document.querySelectorAll(".nav-link");
//Smooth
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Get the current year
const currentYear = document.querySelector('#currentYear');
today = new Date();
const year = today.getFullYear();
currentYear.textContent = year;