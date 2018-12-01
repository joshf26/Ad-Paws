const cat = document.getElementById('flying-cat');
const grav = 0.2;

let x = 0;
let y = 0;
let vel_x = 10;
let vel_y = 0;

function update() {
    vel_y += grav;

    y += vel_y;
    x += vel_x;

    if (x + 208 >= window.innerWidth || x <= 0) {
        vel_x = -vel_x;
    }
    if (y + 252 >= window.innerHeight) {
        vel_y = -(vel_y * 0.9);
        y -= 2;
    }

    cat.style.left = x + 'px';
    cat.style.top = y + 'px';
}

function jump() {
    vel_y = -10;
}

window.addEventListener('click', jump);
setInterval(update, 20);