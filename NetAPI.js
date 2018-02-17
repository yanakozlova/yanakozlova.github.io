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
const imgs = ['spdu_logo', 'java', 'html5', 'qa', 'about_logo', 'Polygon', 'Polygon1'];

if (connectionSpeed === 'high') {
    imgs.forEach((item) => {
            let img = document.createElement('img');
            img.setAttribute('src', 'images/' + item+ '.png');
            const im_place = document.getElementsByClassName(item);
            console.log(im_place);
            if (im_place.length > 1) {
                for (let i = 0; i < im_place.length; i++) {
                    let img = document.createElement('img');
                    img.setAttribute('src', 'images/' + item +'.png');
                    im_place[i].appendChild(img);
                    console.log(im_place[i])
                }
            } else {
                im_place[0].appendChild(img)
            }
        }
    );
}

