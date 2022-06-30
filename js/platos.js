

import {modal} from "./desayunosMeriendas.js";

export function platos () {

    fetch('./json/platos.json')
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerProductos(data);
        })
        .catch(function (err){console.log("este es el error", err);})
}

/*button.addEventListener('click', (e) => {
    e.preventDefault();*/

function leerProductos(data){

    /*let dataAppi = {
        nombre: data.title,
        precio: data.precio,
        imgBig: data.imgBig,
        imgSmall: data.imgSmall
    }*/
   /* console.log(dataAppi.nombre);*/
    let platos = '';
    const leerPlatos = document.querySelector('.leerPlatos');
    for (let i = 0; i < data.length; i++) {
        platos += `<button title="Ver Mas"class="btnVerMas m-2 divProductos drop-shadow-lg" 
                                            data-name="${data[i].title}" 
                                            data-precio="${data[i].precio}"
                                            data-img="${data[i].imgBigModal}"
                                            >
                                <div class="divProductos__img">
                                    <picture class="">
                                        <source media="(max-width: 751px)" srcset="${data[i].imgBig}">
                                        <source media="(min-width: 380px)" srcset="${data[i].imgBig}">
                                        <img src="${data[i].imgBig}" class="" alt="Mi imagen responsive">
                                    </picture>
                                </div>
                                <div class="divProductos__div">
                                    <h3 class="divProductos__h3">${data[i].title}</h3>
                                    <p class="divProductos__p"><span>Precio: $</span>${data[i].precio}</p>
                                </div>
                        </button>`;

    }
    leerPlatos.innerHTML = `<div class="leerJson">${platos}</div>`;

    let btnVerMas = document.querySelectorAll('.btnVerMas');
    btnVerMas.forEach(function (itemns) {

        itemns.addEventListener('click', function (){
            console.log('este es mi this: ', this)
            const iteral = {
                precio: this.dataset.precio,
                name: this.dataset.name,
                image: this.dataset.img
            };
            modal(iteral);
        });
    })

}
