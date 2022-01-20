import { initSelect2 } from '../components/init_select2';

// turbolink is like execute when the page loads, function param is event
document.addEventListener("turbolinks:load", function() {
  initSelect2();
});
