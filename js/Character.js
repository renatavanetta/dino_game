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

        setInterval(() => {

            function runningDino(){
                 for(let x = 0; x < imageArray.length; x++){
                     console.log(imageArray[x])
                     console.log(imageArray.length)
                     var dinoImage = new Image();
                     dinoImage.src = imageArray[x];
                     dinoImage.onload = function() {
                         ctx.drawImage(dinoImage, this.x, this.y, this.width, this.length);
                     }
                 }
            }
            
            runningDino()

        }, 100);
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

        img.onload = function() {
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
    }
}