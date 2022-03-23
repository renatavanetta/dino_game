export class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    walk(scenario_width, scenario_height) {
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');

        let dino0 = new Image();
        let dino1 = new Image();

        dino0.src = '../images/dino-run-0.png';
        dino1.sec = '../images/dino-run-1.png';

        setInterval(() => {


            function runningDino(){
                let imgArray = new Array();
                imgArray[0] = new Image();
                imgArray[0].src = '../images/dino-run-0.png';
                imgArray[1] = new Image();
                imgArray[1].src = '../images/dino-run-1.png';





                dino1.onload = function() {
                    ctx.drawImage(dino1, 0, 0);
                }
                dino2.onload = function() {
                    ctx.drawImage(dino2, 0, 0);
                }
            }
            
            runningDino()
        }, 10);

        runningDino()

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