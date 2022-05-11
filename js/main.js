
import {bebidas} from "./bebidas.js";
import {desayunosMeriendas} from "./desayunosMeriendas.js";
import {platos} from "./platos.js";
import {cafeteria} from "./cafeteria.js";

window.addEventListener('DOMContentLoaded', (e) => {
    desayunosMeriendas();
    cafeteria();
    bebidas();
    platos();

})
const button = document.querySelector('.button');
let ventanaHombres = document.querySelector('#ventanaHombres');
button.addEventListener('click', (e) => {
    e.preventDefault();

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

})



