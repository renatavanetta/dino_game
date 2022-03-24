export class Character {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    walk(scenario_width, scenario_height) {
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        let imageArray = ['../images/dino-run-0.png', '../images/dino-run-1.png']
        let dino_canvas_height = canvas.scrollHeight;
        let dino_canvas_width = canvas.scrollWidth;


        function runningDino() {
            console.log(ctx.canvas.width)
            for (let x = 0; x < imageArray.length; x++) {
                console.log(imageArray[x])
                var dinoImage = new Image();
                dinoImage.src = imageArray[x];

                //ajustar o tempo do for. settimeout draw img. talvez uma por uma com dois drawImage.

                dinoImage.onload = function () {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(dinoImage, 0, 0, 88, 94);
                }

                setTimeout(() => {
                    //runningDino();
                }, 200);
            }
        }

        runningDino()
    }

    /*jump(){

    }

    duck() {

    }*/

    still() {

        let dino_canvas = document.getElementById('dino-char');
        let ctx = dino_canvas.getContext('2d');

        let img = new Image();
        img.src = '../images/dino-stationary.png';

        img.onload = function () {
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
    }
}