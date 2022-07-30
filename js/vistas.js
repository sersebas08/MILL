import CONST from "./constants.js";

export function vistas () {
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
}