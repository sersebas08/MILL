

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
export function modal(){
    console.log('hasta llego');
    /* console.log('esta es la data de cafeteria: ' , );*/
    ventanaHombres.classList.add("modalHombre");
    ventanaHombres.classList.remove("hidden");


    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaHombres.classList.add("hidden");
        ventanaHombres.classList.remove("modalHombre");
        return false;
    }
    ventanaHombres.appendChild(a);
    console.log('hola mundo')

}
/*let ventanaHombres = document.querySelector('#ventanaHombres');
let button = document.querySelector('.button');
button.style.backgroundColor = 'yellow';
button.onclick = modal;*/
export  function leerProductos(data){


    for (const prop in data) {
        console.log(`obj.${prop} = ${data[prop]}`);
    }

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
                                </div>
                                <button type="submit" class="button">ver mas</button>`;

}
