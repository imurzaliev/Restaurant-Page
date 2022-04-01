const homepage = () => {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const topbar = document.createElement("div");
  const home = document.createElement("h3");
  const menu = document.createElement("h3");
  const contact = document.createElement("h3");
  const title = document.createElement("h1");
  const logo = document.createElement("h1");
  const main = document.createElement("main");
  const about = document.createElement("p");
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");
  home.textContent = "home";
  menu.textContent = "menu";
  contact.textContent = "contact";
  title.textContent = "Your Favorite Restaurant";
  logo.textContent = "YFR";
  logo.classList.add("logo");
  about.classList.add("about");
  about.textContent =
    "KITCHEN (noun) This is a kitchen. A place for creativity, a place to dream. Dream to be brave. Never be afraid of mistakes. Always questioning the possibilities, never sitting still, but always evolving and pushing ourselves. We still respect the past and never forget where we came from. Huminity is our key ingredient. We are here not to feed the stomach but to fill the heart and soul. It is not about the country or the culture, it's about the state of mind.";
  a.href = "https://github.com/imurzaliev/Restaurant-Page";
  a.target = "_blank";
  a.textContent = "Murzaliev Iskender ©";
  p.textContent = "2022 ";
  topbar.classList.add("topbar");
  topbar.appendChild(logo);
  topbar.appendChild(home);
  topbar.appendChild(menu);
  topbar.appendChild(contact);
  header.appendChild(topbar);
  main.appendChild(title);
  main.appendChild(about);
  p.appendChild(a);
  footer.appendChild(p);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  return content;
};

export { homepage };
