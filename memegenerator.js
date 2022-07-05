
let form = document.querySelector("form");

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let meme = document.createElement("div");
  let top_text = document.createElement("div");
  let bottom_text = document.createElement("div");
  let img = document.createElement("img");

  let btn = document.createElement("button");
  btn.setAttribute("type","button");

  img.src = document.getElementById("imageInput").value;
  top_text.classList.add("top_text");
  top_text.innerHTML = document.getElementById("topText").value;

  bottom_text.classList.add("bottom_text");
  bottom_text.innerHTML = document.getElementById("bottomText").value;

  btn.innerHTML = "REMOVE";

  meme.classList.add("meme");
  meme.appendChild(top_text);
  meme.appendChild(bottom_text);
  meme.appendChild(img);
  meme.appendChild(btn);

  let memeLocation = document.getElementById('memes');
  memeLocation.appendChild(meme);

  document.getElementById("imageInput").value = "";
  document.getElementById("topText").value = "";
  document.getElementById("bottomText").value = "";

  btn.addEventListener('click', function(e) {
      meme.remove();
  })
});
