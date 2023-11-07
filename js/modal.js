export function modal(data){

    let ventanaModal = document.querySelector('#ventanaModal');
    let ventanaModales = document.querySelector('#ventanaModales');

    ventanaModal.classList.add("modalHombre");
    ventanaModal.classList.remove("hidden");
    ventanaModales.classList.remove("hidden");
    let html = '';

    html += `<div class="divProductosModal drop-shadow-lg">
                    <picture>
                      <source media="(min-width: 751px)" srcset="${data.image}">
                      <source media="(min-width: 380px)" srcset="${data.image}">
                      <img src="${data.image}" class=" " alt="Mi imagen responsive">
                    </picture>
                    <h3  class="divProductosModal__h3">${data.name}</h3>
                    <h4  class="divProductosModal__h4"><span>Precio: $ </span>${data.precio}</h4>
                </div>
                <div>
                     <p class="text-light text-center letraChica">Las fotos publicadas son ilustraciones, no imágenes reales.</p>              
                </div>`;

    ventanaModales.innerHTML = html;

    // let a = document.createElement('a');
    // a.href = '#';
    // a.id = 'modal'
    // a.innerHTML = 'CERRAR';
    ventanaModal.onclick = function () {

        ventanaModal.classList.add("hidden");
        ventanaModales.classList.add("hidden");
        ventanaModal.classList.remove("modalHombre");
        return false;
    }
    ventanaModal.appendChild(a);
    ventanaModal.appendChild(ventanaModales);

}

export function modalMill (){
    let ventanaModalEnsaladas = document.querySelector('#ventanaModalEnsaladas');
    let ventanaModalesEnsaladas = document.querySelector('#ventanaModalesEnsaladas');

    ventanaModalEnsaladas.classList.add("modalHombre");
    ventanaModalEnsaladas.classList.remove("hidden");
    ventanaModalesEnsaladas.classList.remove("hidden");
    let html = '';

    html += `<div class="divModalMill drop-shadow-lg">
                    <picture class="pictureModal">
                      <source media="(min-width: 751px)" srcset="./../img/molino.png">
                      <source media="(min-width: 380px)" srcset="./../img/molino.png">
                      <img src="./../img/molino.png" class="pictureModal__imgModal" alt="Mi imagen responsive">
                    </picture>
                    <div class="divModalMillDatos">
                        <h2 class="divModalMillDatos__h2">Mill</h2>
                        <h3 class="divModalMillDatos__h4"><span>Dirección</span>Raul scalabrini ortiz 801</h3>
                        <h4 class="divModalMillDatos__h4"><span>Horarios</span></h4>
                        <p class="divModalMillDatos__h4"><span>Lunes a viernes</span>8:00hs a 20:00hs</p>
                        <p class="divModalMillDatos__h4"><span>Sabados</span>10:00hs a 20:00hs</p>
                        <p class="divModalMillDatos__h4"><span>Domingos</span>Cerrados</p>
                    </div>
                </div>`;

    ventanaModalesEnsaladas.innerHTML = html;

    // let a = document.createElement('a');
    // a.href = '#';
    // a.id = 'modal'
    // a.innerHTML = 'CERRAR';
    ventanaModalEnsaladas.onclick = function () {

        ventanaModalEnsaladas.classList.add("hidden");
        ventanaModalesEnsaladas.classList.add("hidden");
        ventanaModalEnsaladas.classList.remove("modalHombre");
        return false;
    }
    ventanaModalEnsaladas.appendChild(a);
    ventanaModalEnsaladas.appendChild(ventanaModalesEnsaladas);
}
let ventanaHombres = document.querySelector('#ventanaHombres');

let button = document.querySelector('.button');
// button.style.backgroundColor = 'yellow';
button.onclick = modalMill;
