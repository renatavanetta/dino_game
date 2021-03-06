import { Character } from "../js/Character.js";

// Variables
let scenario_height = 300;
let scenario_width = 800;

let gameOver = false;
let gameStarted = false;

let SpriteSheet = document.getElementById('dinoSpriteSheet');
let dino = new Character(0, 200, 88, 94);

window.onload = function() {
   dino.still();
}

function startGame() {
    document.getElementById('start_game_p').style.display = "none";
    gameStarted = true;

    Ground();
    Cactus();
    
    if(!gameOver){
        dino.runAndJump(SpriteSheet);
    }
}  

function Ground() {
    let ground_canvas = document.getElementById('ground-canvas');
    let ctx = ground_canvas.getContext('2d');
    let ground = document.getElementById('dinoSpriteSheet');
    let ground_canvas_height = ground_canvas.scrollHeight;
    let ground_canvas_width = ground_canvas.scrollWidth;
    let scroll = 0;
    let speed = 1;
    
    function drawGround() {
        ctx.clearRect(0, 0, ground_canvas_width, ground_canvas_height);

        if (scroll >= ground_canvas_width - speed) {
            scroll = 0;
        }

        scroll += speed;

        ctx.drawImage(ground, 0, 100, 2404, 50, -scroll, ground_canvas_height - 40, ground_canvas_width + (ground_canvas_width * 5) / 176, 40);
        ctx.drawImage(ground, 0, 100, 2404, 50, ground_canvas_width - scroll, ground_canvas_height - 40, ground_canvas_width + (ground_canvas_width * 5) / 176, 40);
    }

    let groundInterval = setInterval(drawGround, 2);
    
    if (gameOver) {
        clearInterval(groundInterval);
    }

}

function Cactus() {
    let randomNumber = Math.floor(Math.random() * (4000 - 700) + 700);

    let cactus = document.getElementById('cactus_img');
    let ctx_cactus = cactus.getContext('2d');
    let cactus_img = new Image();
    cactus_img.src = '../images/cactus.png';

    cactus_img.onload = function() {

        let scroll = scenario_width;
        let speed = 1; 

        function moveCactus() {
            scroll -= speed;
            ctx_cactus.drawImage(cactus_img, scroll, (scenario_height - cactus_img.height - 10));
        }

        setInterval(moveCactus, 2);
    }

    // gerar cactos aleatoriamente
    setTimeout(Cactus, randomNumber);
}


document.addEventListener("keydown", function(event) {
    switch(event.key){
        case ' ': 
        if(gameStarted == false){
            startGame(); break;
        }
    }
})