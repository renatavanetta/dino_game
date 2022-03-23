export class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    walk() {

    }

    jump(){
        
    }

    duck() {

    }

    still() {        
        
        let dino_canvas = document.getElementById('dino-char');
        let ctx = dino_canvas.getContext('2d');

        let img = new Image();
        img.src = '../images/dino-stationary.png';

        
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
    }
}