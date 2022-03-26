export class Character {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    run(SpriteSheet) {
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        let control = false;

        function runDino() {
                if(control == false){
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(SpriteSheet, 1510, 0, 88, 100, 0, 112, 88, 94);
                    control = true;
                }else{
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(SpriteSheet, 1600, 0, 88, 100, 0, 112, 88, 94); 
                    control = false;
                } 

        setInterval(runDino, 120);
    }

    /*jump(jumping, dino){
        let gravity = 1
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        
        function up() {
            jumping = true;
            gravity += 0.5;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(0, (ctx.canvas.height - dino.height) +gravity, 88, 94);

            if(dino.y == ctx.canvas.height){
               // down();
            }
        }

        function down() {
            gravity -= 0.5;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(0, -gravity, 88, 94);

            if(dino.y == 0){
                jumping = false;
                run()
            }
        }

        setTimeout(() => {
            up()
        }, 200);

        up()
    }

    duck() {

    }*/

    still() {
        let dino_canvas = document.getElementById('dino-char');
        let ctx = dino_canvas.getContext('2d');
        let SpriteSheet = document.getElementById('dinoSpriteSheet');

        ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, this.x, this.y, this.width, this.height);    
    }
}
