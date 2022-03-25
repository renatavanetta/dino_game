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

        let runningDino = [
            {
                sx: 1510,
                sy: 0,
                sWidth: 88,
                sHeight: 100,
                x: 0,
                y: 112,
                dWidth: 88,
                dHeight: 94,
            },
            {
                sx: 1600,
                sy: 0,
                dWidth: 88,
                dHeight: 100,
                x: 0,
                y: 112,
                dWidth: 88,
                dHeight: 94,
            }
        ]

        function runDino() {
                console.log('entrando aqui')
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(SpriteSheet, runningDino[0].sx, runningDino[0].sy, runningDino[0].sWidth, runningDino[0].sHeight, runningDino[0].x, runningDino[0].y, runningDino[0].dWidth, runningDino[0].dHeight); 
                ctx.drawImage(SpriteSheet, runningDino[1].sx, runningDino[1].sy, runningDino[1].sWidth, runningDino[1].sHeight, runningDino[1].x, runningDino[1].y, runningDino[1].dWidth, runningDino[1].dHeight);   
        }

        setInterval(runDino, 50);
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
