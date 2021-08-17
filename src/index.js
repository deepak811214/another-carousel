import "./styles.css";

function carousel(container) {
  const root = document.getElementById(container);
  const content = root.children;
  const contentLength = content.length;

  const buttonNext = document.createElement("button");
  buttonNext.classList.add("prev");
  buttonNext.innerHTML = "&lt";
  buttonNext.addEventListener("click", () => move(-1));
  const buttonPrev = document.createElement("button");
  buttonPrev.classList.add("prev");
  buttonPrev.innerHTML = "&gt";
  buttonPrev.addEventListener("click", () => move(+1));

  let index = 0;
  let move = function (key) {
    index = index + key;
    if (index === contentLength) {
      index = contentLength - 1;
    } else if (index === -1) {
      index = 0;
    }
    content[index].scrollIntoView({ behavior: "smooth" });
  };
  root.insertAdjacentElement("afterend", buttonPrev);
  root.insertAdjacentElement("afterend", buttonNext);
}

carousel("container");
