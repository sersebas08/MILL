import CONST from "./constants.js";

export function vistas () {
    CONST.uno.addEventListener('click', () => {
        CONST.principalCafeteria.classList.add("hidden");
        CONST.principalDesayuno.classList.remove("hidden");
        CONST.principalBebidas.classList.add("hidden");
        CONST.principalPlatos.classList.add("hidden");
        CONST.principalEnsaladas.classList.add("hidden");
        if(CONST.uno){
            CONST.unos.style.backgroundColor = '#ff000042';
            CONST.doss.style.backgroundColor = '';
            CONST.tress.style.backgroundColor = '';
            CONST.cuatros.style.backgroundColor = '';
            CONST.cincos.style.backgroundColor = '';
        }
    });

    CONST.dos.addEventListener('click', () => {
        CONST.principalCafeteria.classList.remove("hidden");
        CONST.principalDesayuno.classList.add("hidden");
        CONST.principalBebidas.classList.add("hidden");
        CONST.principalPlatos.classList.add("hidden");
        CONST.principalEnsaladas.classList.add("hidden");
        if(CONST.dos){
            CONST.unos.style.backgroundColor = '';
            CONST.doss.style.backgroundColor = '#ff000042';
            CONST.tress.style.backgroundColor = '';
            CONST.cuatros.style.backgroundColor = '';
            CONST.cincos.style.backgroundColor = '';
        }
    });

    CONST.tres.addEventListener('click', () => {
        CONST.principalCafeteria.classList.add("hidden");
        CONST.principalDesayuno.classList.add("hidden");
        CONST.principalBebidas.classList.remove("hidden");
        CONST.principalPlatos.classList.add("hidden");
        CONST.principalEnsaladas.classList.add("hidden");
        if(CONST.tres){
            CONST.unos.style.backgroundColor = '';
            CONST.doss.style.backgroundColor = '';
            CONST.tress.style.backgroundColor = '#ff000042';
            CONST.cuatros.style.backgroundColor = '';
            CONST.cincos.style.backgroundColor = '';
        }
    });


    CONST.cuatro.addEventListener('click', () => {
        CONST.principalCafeteria.classList.add("hidden");
        CONST.principalDesayuno.classList.add("hidden");
        CONST.principalBebidas.classList.add("hidden");
        CONST.principalPlatos.classList.remove("hidden");
        CONST.principalEnsaladas.classList.add("hidden");
        if(CONST.cuatro){
            CONST.unos.style.backgroundColor = '';
            CONST.doss.style.backgroundColor = '';
            CONST.tress.style.backgroundColor = '';
            CONST.cuatros.style.backgroundColor = '#ff000042';
            CONST.cincos.style.backgroundColor = '';
        }
    });


    CONST.cinco.addEventListener('click', () => {
        CONST.principalCafeteria.classList.add("hidden");
        CONST.principalDesayuno.classList.add("hidden");
        CONST.principalBebidas.classList.add("hidden");
        CONST.principalPlatos.classList.add("hidden");
        CONST.principalEnsaladas.classList.remove("hidden");
        if(CONST.cinco){
            CONST.unos.style.backgroundColor = '';
            CONST.doss.style.backgroundColor = '';
            CONST.tress.style.backgroundColor = '';
            CONST.cuatros.style.backgroundColor = '';
            CONST.cincos.style.backgroundColor = '#ff000042';
        }

    });
}