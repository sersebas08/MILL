
import {bebidas} from "./bebidas.js";
import {desayunosMeriendas} from "./desayunosMeriendas.js";
import {platos} from "./platos.js";
import {cafeteria} from "./cafeteria.js";
import {ensaladas} from "./ensaladas.js";
import CONST from "./constants.js";
/*import {modal} from "./modal.js";*/


CONST.uno.addEventListener('click', () => {
    CONST.principalCafeteria.classList.add("hidden");
    CONST.principalDesayuno.classList.remove("hidden");
    CONST.principalBebidas.classList.add("hidden");
    CONST.principalPlatos.classList.add("hidden");
    CONST.principalEnsaladas.classList.add("hidden");
    if(CONST.uno){
        CONST.uno.style.backgroundColor = '#ff000042';
        CONST.dos.style.backgroundColor = '';
        CONST.tres.style.backgroundColor = '';
        CONST.cuatro.style.backgroundColor = '';
        CONST.cinco.style.backgroundColor = '';
    }
});

CONST.dos.addEventListener('click', () => {
    CONST.principalCafeteria.classList.remove("hidden");
    CONST.principalDesayuno.classList.add("hidden");
    CONST.principalBebidas.classList.add("hidden");
    CONST.principalPlatos.classList.add("hidden");
    CONST.principalEnsaladas.classList.add("hidden");
    if(CONST.dos){
        CONST.uno.style.backgroundColor = '';
        CONST.dos.style.backgroundColor = '#ff000042';
        CONST.tres.style.backgroundColor = '';
        CONST.cuatro.style.backgroundColor = '';
        CONST.cinco.style.backgroundColor = '';
    }
});

CONST.tres.addEventListener('click', () => {
    CONST.principalCafeteria.classList.add("hidden");
    CONST.principalDesayuno.classList.add("hidden");
    CONST.principalBebidas.classList.remove("hidden");
    CONST.principalPlatos.classList.add("hidden");
    CONST.principalEnsaladas.classList.add("hidden");
    if(CONST.tres){
        CONST.uno.style.backgroundColor = '';
        CONST.dos.style.backgroundColor = '';
        CONST.tres.style.backgroundColor = '#ff000042';
        CONST.cuatro.style.backgroundColor = '';
        CONST.cinco.style.backgroundColor = '';
    }
});


CONST.cuatro.addEventListener('click', () => {
    CONST.principalCafeteria.classList.add("hidden");
    CONST.principalDesayuno.classList.add("hidden");
    CONST.principalBebidas.classList.add("hidden");
    CONST.principalPlatos.classList.remove("hidden");
    CONST.principalEnsaladas.classList.add("hidden");
    if(CONST.cuatro){
        CONST.uno.style.backgroundColor = '';
        CONST.dos.style.backgroundColor = '';
        CONST.tres.style.backgroundColor = '';
        CONST.cuatro.style.backgroundColor = '#ff000042';
        CONST.cinco.style.backgroundColor = '';
    }
});


CONST.cinco.addEventListener('click', () => {
    CONST.principalCafeteria.classList.add("hidden");
    CONST.principalDesayuno.classList.add("hidden");
    CONST.principalBebidas.classList.add("hidden");
    CONST.principalPlatos.classList.add("hidden");
    CONST.principalEnsaladas.classList.remove("hidden");
    if(CONST.cinco){
        CONST.uno.style.backgroundColor = '';
        CONST.dos.style.backgroundColor = '';
        CONST.tres.style.backgroundColor = '';
        CONST.cuatro.style.backgroundColor = '';
        CONST.cinco.style.backgroundColor = '#ff000042';
    }

});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
window.addEventListener('DOMContentLoaded', (e) => {
    desayunosMeriendas();
    cafeteria();
    bebidas();
    platos();
    ensaladas();
})

window.addEventListener('offline', event => {
    CONST.estadoConexion.innerHTML = 'Estas navegando sin conexion a la red';
    /*estadoConexion.style.position = 'fixed';*/
    /*estadoConexion.style.backgroundColor = 'rgb(175 220 40)';*/

})

window.addEventListener('online', event => {
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








