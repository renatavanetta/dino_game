import { Character } from "../js/Character.js";

// Variables
let scenario_height = 200;
let scenario_width = 800;

let gameOver = false;
let gameStarted = false;
let jumping = false;

let SpriteSheet = document.getElementById('dinoSpriteSheet');
let dino = new Character(0, 112, 88, 94);


window.onload = function() {
   dino.still();
   
   //dino.run(SpriteSheet);
}

function startGame() {
    gameStarted = true;

    Ground();
    Cactus();
    //dino.walk(scenario_width, scenario_height);
    if(!jumping && !gameOver){
        dino.run(SpriteSheet);
    }

    /*let startTimeOut = setTimeout(function() {
        // IMPLEMENTAR - dino da um pulinho;
          
        if(gameOver){
            clearTimeout(startTimeOut)
        }

    }, 50);*/

    
}  

function Ground() {
    let ground_canvas = document.getElementById('ground-canvas');
    let ctx = ground_canvas.getContext('2d');

    let ground_canvas_height = ground_canvas.scrollHeight;
    let ground_canvas_width = ground_canvas.scrollWidth;


    let scroll = 0;
    let speed = 1;

    let ground = document.getElementById('dinoSpriteSheet');


    function draw() {
        ctx.clearRect(0, 0, ground_canvas_width, ground_canvas_height);

        if (scroll >= ground_canvas_width - speed) {
            scroll = 0;
        }

        scroll += speed;
        //ctx.drawImage(SpriteSheet, 0, 100, 2404, 50, 0, ctx.canvas.height - 25 , 2404, 25)
        //ground_canvas_width + (ground_canvas_width * 5) / 176
        ctx.drawImage(ground, 0, 100, 2404, 50, -scroll, ground_canvas_height - 25, ground_canvas_width + (ground_canvas_width * 5) / 176, 25);
        ctx.drawImage(ground, 0, 100, 2404, 50, ground_canvas_width - scroll, ground_canvas_height - 25, ground_canvas_width + (ground_canvas_width * 5) / 176, 25);
    }

    let groundTimeOut = setInterval(draw, 5);

    if (gameOver) {
        clearTimeout(groundTimeOut)
    }

}

function Cactus() {
    
    let randomNumber = Math.floor(Math.random() * (6000 - 1000) + 1000);
    console.log(randomNumber)
    
    let cactus = document.getElementById('cactus_img');
    let ctx_cactus = cactus.getContext('2d');

    // criar objeto cactus com cactos variados

    let cactus_img = new Image();
    cactus_img.src = '../images/cactus.png';

    cactus_img.onload = function() {

        let scroll = scenario_width;
        let speed = 1; 

        function moveCactus() {

            scroll -= speed;
            ctx_cactus.drawImage(cactus_img, scroll, (scenario_height - cactus_img.height));

            let cactusTimeOut = setTimeout(function() {
                // se a posição do obstaculo for maior que 0 e menor que a posição do dino e o botton do dino estiver abaixo da altura do obstaculo = game over
    
                /*if(scroll > 0 && scroll < 88 && dino.y < 70){
                    gameOver = true;
                    clearTimeout(cactusTimeOut);
                    //alert('Game Over');
                    // botao restart game
                }*/
    
                moveCactus()
    
            }, 5);

            return;
            
        }

        // gerar cactos aleatoriamente
        setTimeout(() => {
            Cactus()
        }, randomNumber);

        moveCactus();
    }
}

function generateRandomCactus() {
    return Math.floor(Math.random() * (4000 - 2000) + 2000);
}

document.addEventListener("keydown", function(event) {
    switch(event.key){
        case 'ArrowUp':
        case ' ': 
        if(gameStarted == false){
            startGame(); break;
        } else {
            dino.jump(jumping, dino);
        }
    }
})