function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/assets/Avatar-Light.png.png")
  } else {
    img.setAttribute("src", "./Assets/assets/avatar1.png")
  }
}
