document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("h1").innerHTML = "Click the Lightbulb!";

  function toggleLight() {
    let lightbulb = document.querySelector('img');
    if (lightbulb.src.endsWith('4d26vbz5')) {
      lightbulb.src = 'https://tinyurl.com/4225uhzk';
    } else {
      lightbulb.src = 'https://tinyurl.com/4d26vbz5';
    }
  }

  let imageElement = document.querySelector('img');
  if (imageElement) {
    imageElement.addEventListener('click', toggleLight);
  }
});
