import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "destroyed", "broke", "lost"];
  let what = ["my homework", "my phone", "my car"];
  let when = ["before class", "when I was sleeping", "during lunch"];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let excuse =
    randomElement(who) + " " +
    randomElement(action) + " " +
    randomElement(what) + " " +
    randomElement(when);

  document.querySelector("#excuse").innerHTML = excuse;
};