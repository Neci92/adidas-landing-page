import jump from 'jump.module.js';

let btnTop = document.getElementById("btn-top");
let btnSuperstar = document.getElementById("btn-superstar");
let btnVideo= document.getElementById("btn-video");
let btnOther = document.getElementById("btn-other");
let lines = document.getElementsByClassName('line');
let toggler = document.getElementById("toggler");
let nav = document.getElementsByTagName('nav');

//toggle hamburger menu

toggler.addEventListener("click", () => {
  lines[0].classList.toggle("line1");
  lines[0].classList.toggle("close-position1");
  lines[1].classList.toggle("line2");
  lines[1].classList.toggle("close-position2");
  lines[2].classList.toggle("line3");
  lines[2].classList.toggle("close-position2");

  nav[0].classList.toggle("hidden-header");
});

// smooth scrolling
btnTop.addEventListener('click', () => {
  jump("#showcase");
});

btnSuperstar.addEventListener('click', () => {
  jump("#superstar-example");
});

btnVideo.addEventListener('click', () => {
  jump("#yt-vid");
});

btnOther.addEventListener('click', () => {
  jump("#other-models");
});
