import {modal} from "./modal.js";

export function desayunosMeriendas () {

    fetch('./json/desayunos.json')
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerProductosDesayunos(data);
        })
        .catch(function (err){console.log("este es el error", err);})
}

export  function leerProductosDesayunos(data){
    let jsonDesayuno = '';
    const leerJson = document.querySelector('.leerJson');
    for (let i = 0; i < data.length; i++) {
        jsonDesayuno += `<button title="Ver Mas"class="btnVerMas m-2 divProductos drop-shadow-lg" 
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
    leerJson.innerHTML = `<div class="leerJson">${jsonDesayuno}</div>`;

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

