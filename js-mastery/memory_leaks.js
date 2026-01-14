const container = document.querySelector(".container");

function createLeakyButton() {
  const btn = document.createElement("button");
  btn.textContent = "Click Me";

  function handleClick() {
    console.log("Button clicked");
  }

  btn.addEventListener("click", handleClick);

  container.appendChild(btn);

  setTimeout(() => {
    btn.removeEventListener("click", handleClick);
    container.removeChild(btn);
  }, 2000);
}

const intervalID = setInterval(createLeakyButton, 400);

setTimeout(() => {
  clearInterval(intervalID);
}, 10000);
