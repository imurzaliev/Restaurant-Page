const Page = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  const topbar = document.createElement("div");
  const home = document.createElement("h3");
  const menu = document.createElement("h3");
  const contact = document.createElement("h3");
  const logo = document.createElement("h1");
  topbar.classList.add("navbar");
  home.classList.add("home");
  menu.classList.add("menu");
  contact.classList.add("contact");

  const p = document.createElement("p");
  const a = document.createElement("a");

  home.textContent = "home";
  menu.textContent = "menu";
  contact.textContent = "contact";
  logo.textContent = "YFR";
  logo.classList.add("logo");
  topbar.classList.add("topbar");

  a.href = "https://github.com/imurzaliev/Restaurant-Page";
  a.target = "_blank";
  a.textContent = "Murzaliev Iskender ©";
  p.textContent = "2022 ";

  topbar.appendChild(logo);
  topbar.appendChild(home);
  topbar.appendChild(menu);
  topbar.appendChild(contact);
  header.appendChild(topbar);
  p.appendChild(a);
  footer.appendChild(p);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  return content;
};

export { Page };
