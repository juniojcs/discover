function togglemode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./img/avatar.png")
  } else {
    img.setAttribute("src", "./img/avatar-night.png")
  }
}
