
import {modalEnsaladas} from "./ModalEnsaladas.js";

export function ensaladas () {

    fetch('./json/ensaladas.json')
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerEnsaladas(data);
        })
        .catch(function (err){console.log("este es el error", err);})
}

export  function leerEnsaladas(data){

    let jsonEnsaladas = '';
    const leerEnsaladas = document.querySelector('.leerEnsaladas');
    for (let i = 0; i < data.length; i++) {
        jsonEnsaladas += `<button title="Ver Mas"class="btnVerMasEnsaladas m-2 divProductos drop-shadow-lg" 
                                            data-name="${data[i].title}"
                                            data-text="${data[i].text}" 
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
    leerEnsaladas.innerHTML = `<div class="leerJson">${jsonEnsaladas}</div>`;

    let btnVerMasEnsaladas = document.querySelectorAll('.btnVerMasEnsaladas');
    btnVerMasEnsaladas.forEach(function (itemns) {

        itemns.addEventListener('click', function (){
            console.log('este es mi this: ', this)
            const iteral = {
                precio: this.dataset.precio,
                name: this.dataset.name,
                text: this.dataset.text,
                image: this.dataset.img
            };
            modalEnsaladas(iteral);
        });
    })
}