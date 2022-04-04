import Data from "./menu.csv";

const Menu = () => {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < Data.length; i++) {
    const ul = document.createElement("ul");
    ul.textContent = Data[i][0];

    for (let j = 1; j < Data[i].length; j++) {
      const li = document.createElement("li");
      li.textContent = Data[i][j];
      ul.appendChild(li);
    }
    container.appendChild(ul);
  }

  main.appendChild(container);

  return main;
};

export { Menu };
