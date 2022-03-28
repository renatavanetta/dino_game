export class Character {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    runAndJump(SpriteSheet) {
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        let control = false;
        let jumping = false;
        let gravity = 0.5;
        let dinoY = 200;

        function jump() {   
            jumping = true;
            clearInterval(runTime);

            let upTimer = setInterval(() => {
                // move up
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, 0, dinoY * gravity, 88, 94);
                dinoY -= 30;
                
                if (dinoY * gravity === 25) {
                    clearInterval(upTimer);
                    setTimeout(down, 100);
                }
            }, 25);

            function down() {
                let downTimer = setInterval(function () {
                    dinoY += 20;
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, 0, dinoY * gravity, 88, 94);
                    //verifica se ja esta no chao
                    if (dinoY * gravity === 205) {
                        clearInterval(downTimer)
                        gravity = 0.5;
                        dinoY = 200;
                        jumping = false;
                        runTime = setInterval(run, 120);
                    }
                }, 25)
            } 
        }

        function run() {
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

        let runTime = setInterval(run, 120);

        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                case 'ArrowUp':
                case ' ':
                    if (!jumping) {
                        jump(); 
                    }
                break;
            }
        })
    }

   /* run(SpriteSheet, jumping) {
            let canvas = document.getElementById('dino-char');
            let ctx = canvas.getContext('2d');
            let control = false;
            
        function runDino() {
            //console.log('executando run')
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

        if(jumping){
            // jump
            // jumping = false;
            // run()
        }
    }

    jump(jumping, dino) {
        let gravity = 0.5
        let canvas = document.getElementById('dino-char');
        let ctx = canvas.getContext('2d');
        let SpriteSheet = document.getElementById('dinoSpriteSheet');
        let dinoY = 200

        function up() {
            // move down
            if (dinoY * gravity === 40) {
                clearInterval(upTimer)
                setTimeout(() => {
                    let downTimer = setInterval(function () {
                        dinoY += 20;
                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, 0, dinoY * gravity, 88, 94);
    
                        //verifica se ja esta no chao
                        if (dinoY * gravity === 200) {
                            clearInterval(downTimer)  
                        }
                    }, 25)
                }, 100);
            }

            // move up
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, 0, dinoY * gravity, 88, 94);
            dinoY -= 20;
        }

        let upTimer = setInterval(up, 25);
    }*/

    /*duck() {

    }*/

    still() {
        let dino_canvas = document.getElementById('dino-char');
        let ctx = dino_canvas.getContext('2d');
        let SpriteSheet = document.getElementById('dinoSpriteSheet');

        ctx.drawImage(SpriteSheet, 1337, 0, 88, 100, this.x, this.y, this.width, this.height);
    }
}
