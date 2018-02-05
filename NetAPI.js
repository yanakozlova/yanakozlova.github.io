let connection, connectionSpeed, htmlNode, htmlClass;
connection = window.navigator.connection || {'type': '0'};

switch (connection.type) {
    case connection.CELL_3G:
        // 3G
        connectionSpeed = 'medium';
        break;
    case connection.CELL_2G:
        // 2G
        connectionSpeed = 'low';
        break;
    default:
        // WIFI, ETHERNET, UNKNOWN
        connectionSpeed = 'high';
}
console.log(connectionSpeed);
if (connectionSpeed !== 'low') {
    const img = document.createElement("img").setAttribute('src','images/java.png');
    document.getElementsByClassName("img_java").appendChild(img);
}