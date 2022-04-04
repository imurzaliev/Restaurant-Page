const Home = () => {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const about = document.createElement("p");

  container.classList.add("container");
  container.classList.add("img");
  title.textContent = "Your Favorite Restaurant";
  about.classList.add("about");
  about.textContent =
    "KITCHEN (noun) This is a kitchen. A place for creativity, a place to dream. Dream to be brave. Never be afraid of mistakes. Always questioning the possibilities, never sitting still, but always evolving and pushing ourselves. We still respect the past and never forget where we came from. Huminity is our key ingredient. We are here not to feed the stomach but to fill the heart and soul. It is not about the country or the culture, it's about the state of mind.";

  container.appendChild(title);
  container.appendChild(about);
  main.appendChild(container);

  return main;
};

export { Home };
