const desayuno = document.getElementById('desa');
desayuno.onclick = cambio;

let sentido = 0;
function cambio (){
    const menu = document.getElementById('menu');
    if (sentido === 0) {
        menu.style.display = 'flex';
        sentido = 1;
    } else{
        menu.style.display = 'none';
        sentido = 0;
    }



}

