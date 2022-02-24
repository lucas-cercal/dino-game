const dino = document.querySelector('.dino');

function handleKeyUp(event)
{
    if(event.keyCode === 32){
        jump();
    }
}

function jump()
{
    let position = 0;

    let upInterval = setInterval(() => {
        if(position >= 150){

            //Irá descer
            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                position -= 20;
                dino.style.bottom = position + "px";

                if(position == 0){
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

document.addEventListener('keyup', handleKeyUp);