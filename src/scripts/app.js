console.log("app screen working");
import { CardScreen } from "./card";

const router = () => {
  const main = document.getElementById("main-container");
  main.innerHTML = CardScreen.render();
};

window.addEventListener("load", router);
