var connection = new WebSocket('ws://localhost:9002');

connection.onopen = function(){
    console.debug("connection opened");
    var i = 0;
    while(i < 3) {
        komunikuj(i);
        i++;
    }
};

connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
    console.log('Server: ' + e.data);
};

connection.onclose = function (ev) {
    console.log('closed');
};

function komunikuj(msg) {
    connection.send(msg);
}