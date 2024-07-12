
let socket;
let input, text, serverURL, connectButton, sendButton;
var a = 0;

function setup() {
	// make an input for the server URL:
	let urlLabel = createSpan("server address:");
	urlLabel.position(10, 210);
	serverURL = createInput("ws://localhost:3000");
	serverURL.position(120, 210);
	// make a connect button:
	connectButton = createButton("connect");
	connectButton.position(300, 210);
	connectButton.mousePressed(connectToServer);

	// make an input for outgoing text:
	// let inputLabel = createSpan("Text to send:");
	// inputLabel.position(10, 240);
	// input = createInput();
	// input.position(120, 240);
	// make a send button:
	sendButton = createButton("send");
	sendButton.position(300, 240);
	sendButton.mousePressed(sendText);

	text = createDiv("Incoming text will go here");
	text.position(10, 280);
}

function connectToServer() {
	socket = new WebSocket(serverURL.value());
	socket.onopen = openSocket;

}

function openSocket() {
	text.html("Socket open");
	}

function sendText() {
	socket.send(a);
	a++;
}

function draw() {
	// socket.send(a);
	console.log(a);
		
}
