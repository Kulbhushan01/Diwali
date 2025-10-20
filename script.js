
const recieverName = document.querySelector("#reciever");
const senderName = document.querySelector("#sender");
recieverName.innerText = new URLSearchParams(location.search).get("reciever");
senderName.innerText = new URLSearchParams(location.search).get("sender") || 'Kulbhushan Gore';

