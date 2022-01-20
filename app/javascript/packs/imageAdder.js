import { placeImage } from '../components/imageadder';

document.addEventListener("click", function(event) {
  event.preventDefault()
  if (event.target === "a") { return;}
  if (event.target === "button") { return;}
  placeImage(event.pageX, event.pageY)
});
