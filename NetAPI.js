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

if (connectionSpeed = 'low') {
    const images = document.getElementsByTagName("img");
    for (let i = 2; i < images.length; i++)
        images[i].src = "";
}
