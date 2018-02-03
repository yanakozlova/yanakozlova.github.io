let connection, connectionSpeed, htmlNode, htmlClass;
connection = window.navigator.connection || {'type':'0'};

switch(connection.type) {
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

// set the connection speed on the html element, i.e. <html class="lowbandwidth">
htmlNode = document.body.parentNode;
htmlClass = htmlNode.getAttribute('class') || '';
htmlNode.setAttribute('class', htmlClass + ' ' + connectionSpeed);
console.log(connectionSpeed);
var images = document.getElementsByTagName("img");
for (var i = 2; i < images.length; i++)
    images[i].src = "";
