


export function bebidas () {

    fetch('./json/bebidas.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(data => {
                leerBebidas(data);
            })
            /*leerProductos(data);*/
            // console.log(data)
        })
        .catch(function (err){console.log("este es el error", err);})
}
export function leerBebidas(data){
    let dataAppi = {
        nombre: data.title,
        precio: data.precio,
        imgBig: data.imgBig,
        imgAlt: data.imgAlt
    }
    // console.log(dataAppi.nombre);
    const leerBebidas = document.querySelector('.leerBebidas');
    leerBebidas.innerHTML += `<div class="divProductos drop-shadow-lg ">
                                <div class="divProductos__img">
                                    <picture class="">
                                        <source media="(min-width: 751px)" srcset="${dataAppi.imgBig}">
                                        <source media="(min-width: 380px)" srcset="${dataAppi.imgBig}">
                                        <img src="${dataAppi.imgBig}" class="" alt="${dataAppi.imgAlt}">
                                    </picture>
                                </div>
                                <div class="divProductos__div">
                                    <h3 class="divProductos__h3">${dataAppi.nombre}</h3>
                                    <p class="divProductos__p"><span>Precio: $</span>${dataAppi.precio}</p>
                                </div>
                            </div>`;

}