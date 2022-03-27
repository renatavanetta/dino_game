export class Character {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    run(SpriteSheet, jumping) {
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        let control = false;

        function runDino() {
            console.log('executando run')
            if (control == false) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(SpriteSheet, 1512, 0, 88, 100, 0, 200, 88, 94);
                control = true;
            } else {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(SpriteSheet, 1600, 0, 88, 100, 0, 200, 88, 94);
                control = false;
            }
        }

        let runTime = setInterval(runDino, 120);

        // add event listener, seta para cima ou espaço, jumping = true, executa jump. up e down. 
        // quando chegar ao solo, jumping = false
    }

    jump(jumping, dino) {
        let gravity = 0.5
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        let SpriteSheet = document.getElementById('dinoSpriteSheet');
        let dinoY = 200

        // tentar implementar position ao inves de diny * gravity

        function up() {
            // move down
            if (dinoY * gravity === 40) {
                clearInterval(upTimer)

                setTimeout(() => {
                    let downTimer = setInterval(function () {
                        console.log('going down')
                        //gravity += 15;
                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, 0, dinoY * gravity, 88, 94);
                        dinoY += 20;
                        console.log(dinoY * gravity)
    
                        //verifica se ja esta no chao
                        if (dinoY * gravity === 210) {
                            console.log('entrei aqui')
                            clearInterval(downTimer)
                        }
                    }, 25)
                }, 100);
                    

            }

            // move up
            console.log('going up')
            //gravity -= 15;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, 0, dinoY * gravity, 88, 94);
            dinoY -= 20;
            console.log(dinoY * gravity)
        }

        let upTimer = setInterval(up, 25);
    }

    duck() {

    }

    still() {
        let dino_canvas = document.getElementById('dino-char');
        let ctx = dino_canvas.getContext('2d');
        let SpriteSheet = document.getElementById('dinoSpriteSheet');

        ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, this.x, this.y, this.width, this.height);
    }

}
