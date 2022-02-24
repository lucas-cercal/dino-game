const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;

function handleKeyUp(event)
{
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump()
{
    isJumping = true;
    let position = 0;
    let upInterval = setInterval(() => {
        if(position >= 150){
            //Irá descer
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                position -= 20;
                dino.style.bottom = position + "px";
                if(position == 0){
                    isJumping = false;
                    clearInterval(downInterval);
                }
            }, 20)
        } else{
            //irá subir
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20)
}

function createCactus()
{
    const cactus = document.createElement('div');
    let cactusPosition = 1300;
    let randomTime = Math.random() * 6000;

    cactus.style.left = cactusPosition + "px";
    cactus.classList.add('cactus');
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        //Se o cactus sair da tela
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60){
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else{
            //Irá continuar se movimentando
            cactusPosition -= 20;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20)

    //Irá definir a aleatoriedade do spawn dos cactus
    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);