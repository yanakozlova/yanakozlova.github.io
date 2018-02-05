let connection, connectionSpeed;
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
const imgs = ['java.png', 'html5.png', 'qa.png', 'about_logo.png', 'Polygon.png', 'Polygon1.png'];

if (connectionSpeed !== 'low') {
    imgs.forEach((item) => {
            let img = document.createElement('img');
            img.setAttribute('src', 'images/' + item);
            const im_place = document.getElementsByClassName(item);
            console.log(im_place.item(1));
            if (im_place.length > 1) {
                for (let i = 0; i < im_place.length) {
                    im_place[i].appendChild(img)
                }
            } else {
                im_place[0].appendChild(img)
            }
        }
    );
}

