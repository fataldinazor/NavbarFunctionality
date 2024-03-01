// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const nvbar = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

nvbar.addEventListener("click", function () {
//   nvbar.classList.add('links');
//   console.log(links.classList.contains("random"));
  links.classList.toggle("show-links");
//   if(links.classList.contains('show-links'))
}); 
