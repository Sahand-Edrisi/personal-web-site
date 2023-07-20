document.body.classList.add("light-theme");

document.getElementById("change-theme").addEventListener("click", (e) => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
 
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
  
  }
});

let home = document.getElementById('home')
let about = document.getElementById('about')
let portfolio = document.getElementById('portfolio')
let myBlogs = document.getElementById('myBlogs')
let contactMe = document.getElementById('contactMe')

function homeClick(){
  if (home.style.display === "none") {  
    about.style.display = "none";
    portfolio.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "none";
    home.style.display = "block";
  }
}

function aboutClick(){
  if (about.style.display === "none") {  
    home.style.display = "none";
    portfolio.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "none";
    about.style.display = "block";
  }
}

function portfolioClick(){
  if (portfolio.style.display === "none") {  
    home.style.display = "none";
    about.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "none";
    portfolio.style.display = "block";
  }
}
function myBlogsClick(){
  if (myBlogs.style.display === "none") {  
    home.style.display = "none";
    portfolio.style.display = "none";
    contactMe.style.display = "none";
    about.style.display = "none";
    myBlogs.style.display = "block";
  }
}
function contactMeClick(){
  if (contactMe.style.display === "none") {  
    home.style.display = "none";
    portfolio.style.display = "none";
    about.style.display = "none";
    myBlogs.style.display = "none";
    contactMe.style.display = "block";
  }
}