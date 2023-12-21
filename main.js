const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const collections = document.querySelector("#collections");
const fragrances = document.querySelector("#fragrances");

//collections
collections.addEventListener("mouseenter", function () {
  div1.style.display = "block";
});

div1.addEventListener("mouseleave", function () {
  div1.style.display = "none";
});

//fragrances
collections.addEventListener("mouseenter", function () {
  div2.style.display = "block";
});

div2.addEventListener("mouseleave", function () {
  div2.style.display = "none";
});
