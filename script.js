let ws = new WebSocket('wss://socket-server-test.onrender.com/:443');

let controlTD = document.querySelector('.controllTD');
let controlledByTD = document.querySelector('.controlledByTD');

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
	if (message.data == 'ping') {   //살아있나 그냥 체크
		ws.send('pong');
		return
	}

	let data = JSON.parse(message.data); 
	if('slder1' in data) {
		let val = data['slider1'];
		controlledByTD.value = val;
	}

	console.log(data);
});

ws.addEventListener('error', (error) => {
	console.error('websocket closed');
});

ws.addEventListener('close', (event) => {
	console.log('websocket closed');
});