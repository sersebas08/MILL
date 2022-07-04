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
                </div>`;

    ventanaModales.innerHTML = html;

    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaModal.classList.add("hidden");
        ventanaModales.classList.add("hidden");
        ventanaModal.classList.remove("modalHombre");
        return false;
    }
    ventanaModal.appendChild(a);
    ventanaModal.appendChild(ventanaModales);

}
/*let ventanaHombres = document.querySelector('#ventanaHombres');

let button = document.querySelector('.button');
// button.style.backgroundColor = 'yellow';
button.onclick = modal;*/
