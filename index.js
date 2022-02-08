const input = document.getElementById('input');

function addingEventListener(clickAlert) {
  input.addEventListener('click', clickAlert);
 }

 function clickAlert() {
  alert('I was clicked!');
}
