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
const imgs = ['spdu_logo.png', 'java.png', 'html5.png', 'qa.png', 'about_logo.png', 'Polygon.png', 'Polygon1.png'];

if (connectionSpeed === 'high') {
    imgs.forEach((item) => {
            let img = document.createElement('img');
            img.setAttribute('src', 'images/' + item);
            const im_place = document.getElementsByClassName(item);
            console.log(im_place);
            if (im_place.length > 1) {
                for (let i = 0; i < im_place.length; i++) {
                    let img = document.createElement('img');
                    img.setAttribute('src', 'images/' + item);
                    im_place[i].appendChild(img);
                    console.log(im_place[i])
                }
            } else {
                im_place[0].appendChild(img)
            }
        }
    );
}

