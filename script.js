let ws = new WebSocket('wss://socket-server-test.onrender.com/:443');

let controlTD = document.querySelector('.controllTD');
controlTD.addEventListener('input', (event) => {
	console.log(controlTD.value);
	ws.send(JSON.stringify({'slider1': controlTD.value}));
});

// controlTD.addEventListener('change', (event) => {   //change는 끝났을때만 Value를 Sending
// 	console.log(controlTD.value);
// });

ws.addEventListener('open', (event) =>{
	console.log('websocket opened');
});

ws.addEventListener('message', (message) => {
	console.log(message);
});

ws.addEventListener('error', (error) => {
	console.error('websocket closed');
});

ws.addEventListener('close', (event) => {
	console.log('websocket closed');
});