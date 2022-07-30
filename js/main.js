
import {bebidas} from "./bebidas.js";
import {desayunosMeriendas} from "./desayunosMeriendas.js";
import {platos} from "./platos.js";
import {cafeteria} from "./cafeteria.js";
import {ensaladas} from "./ensaladas.js";
import {vistas} from "./vistas.js";
import CONST from "./constants.js";

/*import {modal} from "./modal.js";*/
window.addEventListener('DOMContentLoaded', () => {
    desayunosMeriendas();
    cafeteria();
    bebidas();
    platos();
    ensaladas();
    vistas();
})


let swiper;
swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


window.addEventListener('offline', () => {
    CONST.estadoConexion.innerHTML = 'Estas navegando sin conexion a la red';
    /*estadoConexion.style.position = 'fixed';*/
    /*estadoConexion.style.backgroundColor = 'rgb(175 220 40)';*/

})

window.addEventListener('online', () => {
    setTimeout(function (){
        CONST.estadoConexion.innerHTML = '';
        CONST.estadoConexion.style.backgroundColor = '';
    }, 4000);
    CONST.estadoConexion.innerHTML = 'Volviendo a Conectar ...';
   /* estadoConexion.style.position = 'fixed';*/
    CONST.estadoConexion.style.backgroundColor = '#d0e995';
})

if (!navigator.onLine){
    console.log('Sin conexion');
}








