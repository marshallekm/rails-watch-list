
const images = [
"script/pink-popcorn.svg", //"script/happy-star.svg", "script/movie.svg", "script/popcorn-svg.svg"
]

let i = 0

function placeImage(x, y) {

  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y+ "px"
  document.body.appendChild(img)

  i = i + 1

  if (i >= images.length) {
    i = 0
  }


}

document.addEventListener("click", function (event){
event.preventDefault()
placeImage(event.pageX, event.pageY)
})

export {placeImage};

document.addEventListener("touched", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})
