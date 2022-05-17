
export function modal(){
    console.log('hasta llego: ' );

    /* console.log('esta es la data de cafeteria: ' , );*/
    ventanaHombres.classList.add("modalHombre");
    ventanaHombres.classList.remove("hidden");


    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaHombres.classList.add("hidden");
        ventanaHombres.classList.remove("modalHombre");
        return false;
    }
    ventanaHombres.appendChild(a);
    console.log('hola mundo')

}
let ventanaHombres = document.querySelector('#ventanaHombres');
let button = document.querySelector('.button');
// button.style.backgroundColor = 'yellow';
button.onclick = modal;