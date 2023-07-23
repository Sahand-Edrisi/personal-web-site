// cheange-theme

document.body.classList.add("dark-theme");
document.getElementById("change-theme").addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.replace("dark-theme", "light-theme");
  } else {
    document.body.classList.replace("light-theme", "dark-theme");
  }
});

// active-hover-btn

const activeBtn = document.querySelectorAll(".hover");

activeBtn.forEach((active) => {
  active.addEventListener("click", () => {
    removeActiveClasses();
    active.classList.add("active");
  });
});

function removeActiveClasses() {
  activeBtn.forEach((active) => {
    active.classList.remove("active");
  });
}

// cheange-page

const homeClick = document.getElementById("homeClick");
const home = document.getElementById("home");
const aboutClick = document.getElementById("aboutClick");
const about = document.getElementById("about");
const portfolioClick = document.getElementById("portfolioClick");
const portfolio = document.getElementById("portfolio");
const myBlogsClick = document.getElementById("myBlogsClick");
const myBlogs = document.getElementById("myBlogs");
const contactMeClick = document.getElementById("contactMeClick");
const contactMe = document.getElementById("contactMe");

homeClick.addEventListener("click", () => {
  if (home.style.display === "none") {
    about.style.display = "none";
    portfolio.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "none";
    home.style.display = "block";
  }
});
aboutClick.addEventListener("click", () => {
  if (about.style.display === "none") {
    home.style.display = "none";
    portfolio.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "none";
    about.style.display = "block";
  }
});

portfolioClick.addEventListener("click", () => {
  if (portfolio.style.display === "none") {
    home.style.display = "none";
    about.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "none";
    portfolio.style.display = "block";
  }
});

myBlogsClick.addEventListener("click", () => {
  if (myBlogs.style.display === "none") {
    home.style.display = "none";
    portfolio.style.display = "none";
    contactMe.style.display = "none";
    about.style.display = "none";
    myBlogs.style.display = "block";
  }
});

contactMeClick.addEventListener("click", () => {
  if (contactMe.style.display === "none") {
    home.style.display = "none";
    portfolio.style.display = "none";
    about.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "block";
  }
});

const transformWeb = document.querySelectorAll(".transform");

window.addEventListener("scroll", ShowTransform);

function ShowTransform() {
  const rtiggerBouttm = window.innerHeight / 1.01;

  transformWeb.forEach((transform) => {
    const barTop = transform.getBoundingClientRect().top;

    if (barTop < rtiggerBouttm) {
      transform.classList.add("show");
    } else {
      transform.classList.remove("show");
    }
  });
}
