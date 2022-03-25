import { Character } from "../js/Character.js";

// Variables
let scenario_height = 200;
let scenario_width = 800;

console.log(scenario_width)
console.log(scenario_height)

let gameOver = false;
let gameStarted = false;
let jumping = false;
let dino = new Character(0, 112, 88, 94);

window.onload = function() {
   dino.still();
   //dino.walk(scenario_width, scenario_height)
   //startGame()
}

function startGame() {
    gameStarted = true;

    Ground();
    Cactus();
    //dino.walk(scenario_width, scenario_height);
    if(!jumping && !gameOver){
        //dino.still();
        //dino.run(scenario_width, scenario_height);
    }

    let startTimeOut = setTimeout(function() {
        // IMPLEMENTAR - dino da um pulinho;
          
        if(gameOver){
            clearTimeout(startTimeOut)
        }

    }, 50);

    
}  

function Ground(){
    let ground_canvas = document.getElementById('ground-canvas');
    let ctx = ground_canvas.getContext('2d');

    let ground_canvas_height = ground_canvas.scrollHeight;
    let ground_canvas_width = ground_canvas.scrollWidth;

    let scroll = 0;
    let speed = 1; 
    let ground = new Image();
    ground.src = '../images/ground.png'

    ground.onload = function () {
        
        function draw() {
            ctx.clearRect(0,0, ground_canvas_width, ground_canvas_height);

            if(scroll >= ground_canvas_width - speed){
                scroll = 0;
            }

            scroll += speed;

            ctx.drawImage(ground, -scroll, ground_canvas_height-ground.height, ground_canvas_width + (ground_canvas_width * 5) / 176, 24);
            ctx.drawImage(ground, ground_canvas_width - scroll, ground_canvas_height-ground.height, ground_canvas_width + (ground_canvas_width * 5) / 176, 24);
        
            let groundTimeOut = setTimeout(function() {
                draw();
            }, 5);

            if(gameOver){
                clearTimeout(groundTimeOut)
            }
        }

        draw()
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