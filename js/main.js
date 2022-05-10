
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


