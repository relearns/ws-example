const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function open() {
  alert('Connected to server!')
};
socket.onmessage = function incoming(data) {
  console.log(data)
  var el = document.getElementById('count');
  el.innerText = data.data;
};
const incrementCount = () => {
  socket.send(1)
}