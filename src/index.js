import { homepage } from "./homepage";
import "./style.css";
import Background from "./background.jpg";

function component() {
  const content = document.querySelector("#content");

  // const myBackgroundImg = new Image();
  // myBackgroundImg.src = Background;

  // content.appendChild(myBackgroundImg);
  content.appendChild(homepage());
  return content;
}

component();
