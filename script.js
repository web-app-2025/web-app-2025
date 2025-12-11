let cost = 0;
let timer = null;

function toggle() {
  let image = document.querySelector("img");
  if (image.src.includes("off")) {
    image.src = "https://tinyurl.com/tru-on";
    document.body.classList.add("dark-mode");
    if (timer === null) {
      timer = setInterval(function () {
        cost = cost + 0.5;
        document.querySelector("#bill").innerHTML = "Current Bill: $" + cost;
      }, 1000);
    }
  } else {
    image.src = "https://tinyurl.com/tru-off";
    document.body.classList.remove("dark-mode");
    clearInterval(timer);
    timer = null;
  }
}
document.querySelector("img").addEventListener("click", toggle);
