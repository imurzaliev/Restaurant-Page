const Contact = () => {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.classList.add("container");
  const inner = document.createElement("div");
  inner.classList.add("inner");

  const left = document.createElement("div");
  const right = document.createElement("div");
  left.classList.add("left");
  right.classList.add("right");

  const tel = document.createElement("h3");
  const social = document.createElement("h3");
  tel.textContent = "Call us";
  social.textContent = "Follow us";

  const phone = document.createElement("p");
  const note = document.createElement("p");
  phone.textContent = "+1 42069 69420";
  note.textContent = "(ask for Johny)";

  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  const link3 = document.createElement("a");
  link1.textContent = "Instagram";
  link2.textContent = "Facebook";
  link3.textContent = "Telegram";
  link1.href = "https://www.instagram.com";
  link1.target = "_blank";
  link2.href = "https://facebook.com";
  link2.target = "_blank";
  link3.href = "https://www.telegram.org";
  link3.target = "_blank";

  right.appendChild(tel);
  right.appendChild(phone);
  right.appendChild(note);

  left.appendChild(social);
  left.appendChild(link1);
  left.appendChild(link2);
  left.appendChild(link3);

  inner.appendChild(left);
  inner.appendChild(right);

  container.appendChild(inner);
  main.appendChild(container);
  return main;
};

export { Contact };
