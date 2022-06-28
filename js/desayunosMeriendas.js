

export function desayunosMeriendas () {

    fetch('./json/desayunos.json')
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerProductos(data);
        })
        .catch(function (err){console.log("este es el error", err);})
}
const leerJson = document.querySelector('.leerJson');
export  function leerProductos(data){
    console.log('data desayunos: ', data);
    /*let dataAppi = {
        nombre: data.title,
        precio: data.precio,
        imgBig: data.imgBig
    }
    console.log('data nombre: ', dataAppi.nombre);*/

    let jsonDesayuno = '';
    for (let i = 0; i < data.length; i++) {
        jsonDesayuno += `<div class="divProductos drop-shadow-lg">
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
                                <button title="Ver Mas"class="btnVerMas m-2" 
                                        data-name="${data[i].title}" 
                                        data-precio="${data[i].precio}"
                                        data-img="${data[i].imgBig}"
                                        ><i class="bi bi-eye-fill mr-2 perri3"></i>Ver Mas</button>
                            </div>`;

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
export function modal(data){

    let ventanaHombres = document.querySelector('#ventanaHombres');
    let ventanaHombreModal = document.querySelector('#ventanaHombreModal');

    ventanaHombres.classList.add("modalHombre");
    ventanaHombres.classList.remove("hidden");
    ventanaHombreModal.classList.remove("hidden");
    let html = '';

    html += `<div class="divProductosModal drop-shadow-lg">
                    <picture class="w-full p-3">
                      <source media="(min-width: 751px)" srcset="${data.image}">
                      <source media="(min-width: 380px)" srcset="${data.image}">
                      <img src="${data.image}" class=" " alt="Mi imagen responsive">
                    </picture>
                    <h3  class="divProductosModal__h3">${data.name}</h3>
                    <h4  class="divProductosModal__h3"><span>$ </span>${data.precio}</h4>
                </div>`;

    ventanaHombreModal.innerHTML = html;

    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaHombres.classList.add("hidden");
        ventanaHombreModal.classList.add("hidden");
        ventanaHombres.classList.remove("modalHombre");
        return false;
    }
    ventanaHombres.appendChild(a);
    ventanaHombres.appendChild(ventanaHombreModal);

}
