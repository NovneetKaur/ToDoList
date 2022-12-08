const inpute = document.querySelector("input");
const buttone = document.querySelector("button");
const ule = document.querySelector("ul");

buttone.addEventListener("click", function () {
  const dive = document.createElement("div");
  dive.setAttribute("class", "div1");
  const cross = document.createElement("button");
  cross.setAttribute("class", "btn4");
  cross.setAttribute("id", "btn1");
  cross.innerText = "x";
  const up = document.createElement("button");
  up.setAttribute("class", "btn4");
  up.setAttribute("id", "btn2");
  up.innerText = "↑";
  const down = document.createElement("button");
  down.setAttribute("class", "btn4");
  down.setAttribute("id", "btn3");
  down.innerText = "↓";
  const text = document.createElement("h1");
  text.setAttribute("id", "text");
  text.innerText = inpute.value;
  dive.appendChild(cross);
  dive.appendChild(up);
  dive.appendChild(down);
  dive.appendChild(text);
  ule.appendChild(dive);
  inpute.value = "";

  cross.addEventListener("click", function () {
    dive.remove();
  });
  up.addEventListener("click", () => {
    if (dive.previousElementSibling) {
      //if a previous sibling exists
      dive.parentNode.insertBefore(dive, dive.previousElementSibling);
    }
  });
  down.addEventListener("click", () => {
    if (dive.nextElementSibling) {
      //if a previous sibling exists
      dive.parentNode.insertBefore(dive.nextElementSibling, dive);
    }
  });
});
