import { Page } from "./page";
import { Home } from "./home";
import { Menu } from "./menu";
import { Contact } from "./contact";
import { Clear } from "./clear";
import "./style.css";

Page();
Home();

const homeBtn = document.querySelector(".home");
homeBtn.classList.add("selected");
homeBtn.onclick = () => {
  Clear();
  Home();
  homeBtn.classList.toggle("selected");
  menuBtn.classList.remove("selected");
  contactBtn.classList.remove("selected");
};

const menuBtn = document.querySelector(".menu");
menuBtn.onclick = () => {
  Clear();
  Menu();
  homeBtn.classList.remove("selected");
  menuBtn.classList.toggle("selected");
  contactBtn.classList.remove("selected");
};

const contactBtn = document.querySelector(".contact");
contactBtn.onclick = () => {
  Clear();
  Contact();
  homeBtn.classList.remove("selected");
  menuBtn.classList.remove("selected");
  contactBtn.classList.toggle("selected");
};
