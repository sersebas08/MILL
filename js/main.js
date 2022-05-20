
import {bebidas} from "./bebidas.js";
import {desayunosMeriendas} from "./desayunosMeriendas.js";
import {platos} from "./platos.js";
import {cafeteria} from "./cafeteria.js";
import {ensaladas} from "./ensaladas.js";
import {modal} from "./modal.js";

let principalDesayuno = document.querySelector('.principalDesayuno');
let principalCafeteria = document.querySelector('.principalCafeteria');
let principalBebidas = document.querySelector('.principalBebidas');
let principalPlatos = document.querySelector('.principalPlatos');
let principalEnsaladas = document.querySelector('.principalEnsaladas');



let uno = document.querySelector('.uno');
uno.addEventListener('click', () => {
    principalCafeteria.classList.add("hidden");
    principalDesayuno.classList.remove("hidden");
    principalBebidas.classList.add("hidden");
    principalPlatos.classList.add("hidden");
    principalEnsaladas.classList.add("hidden");
});

let dos = document.querySelector('.dos');
dos.addEventListener('click', () => {
    principalCafeteria.classList.remove("hidden");
    principalDesayuno.classList.add("hidden");
    principalBebidas.classList.add("hidden");
    principalPlatos.classList.add("hidden");
    principalEnsaladas.classList.add("hidden");
});
let tres = document.querySelector('.tres');
tres.addEventListener('click', () => {
    principalCafeteria.classList.add("hidden");
    principalDesayuno.classList.add("hidden");
    principalBebidas.classList.remove("hidden");
    principalPlatos.classList.add("hidden");
    principalEnsaladas.classList.add("hidden");
});

let cuatro = document.querySelector('.cuatro');
cuatro.addEventListener('click', () => {
    principalCafeteria.classList.add("hidden");
    principalDesayuno.classList.add("hidden");
    principalBebidas.classList.add("hidden");
    principalPlatos.classList.remove("hidden");
    principalEnsaladas.classList.add("hidden");
});

let cinco = document.querySelector('.cinco');
cinco.addEventListener('click', () => {
    principalCafeteria.classList.add("hidden");
    principalDesayuno.classList.add("hidden");
    principalBebidas.classList.add("hidden");
    principalPlatos.classList.add("hidden");
    principalEnsaladas.classList.remove("hidden");
});

window.addEventListener('DOMContentLoaded', (e) => {
    desayunosMeriendas();
    cafeteria();
    bebidas();
    platos();
    ensaladas();
})







