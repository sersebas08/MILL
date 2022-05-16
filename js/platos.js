
// import {modal} from "./modal.js";
export function platos () {

    fetch('./json/platos.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(data => {
                leerProductos(data);
            })
            /*leerProductos(data);*/
            console.log(data)
        })
        .catch(function (err){console.log("este es el error", err);})
}

/*button.addEventListener('click', (e) => {
    e.preventDefault();*/

function leerProductos(data){



    let dataAppi = {
        nombre: data.title,
        precio: data.precio,
        imgBig: data.imgBig
    }
    console.log(dataAppi.nombre);
    const leerPlatos = document.querySelector('.leerPlatos');
    leerPlatos.innerHTML += ` <div class="divProductos drop-shadow-lg h-38">
                                    <div class="divProductos__img">
                                        <picture class="flex m-auto">
                                            <source media="(min-width: 751px)" srcset="${dataAppi.imgBig}">
                                            <source media="(min-width: 380px)" srcset="${dataAppi.imgBig}">
                                            <img src="${dataAppi.imgBig}" class="w-full" alt="Mi imagen responsive">
                                        </picture>
                                    </div>
                                    <div class="divProductos__div">
                                        <h3 class="divProductos__h3">${dataAppi.nombre}</h3>
                                        <p class="divProductos__p"><span>Precio: $</span>${dataAppi.precio}</p>
                                    </div>
<!--                                    <button class="button" type="submit">button</button>-->
                                </div>`;

}
