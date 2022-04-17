const desayuno = document.getElementById('desa');
desayuno.onclick = cambio;
desayuno.style.border = '2px solid red';


function cambio (){
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
}