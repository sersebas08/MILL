export function modalEnsaladas(data){

    let ventanaModalEnsaladas = document.querySelector('#ventanaModalEnsaladas');
    let ventanaModalesEnsaladas = document.querySelector('#ventanaModalesEnsaladas');

    ventanaModalEnsaladas.classList.add("modalHombreEnsaladas");
    ventanaModalEnsaladas.classList.remove("hidden");
    ventanaModalesEnsaladas.classList.remove("hidden");
    let html = '';

    html += `<div class="divProductosModal drop-shadow-lg">
                    <picture>
                      <source media="(min-width: 751px)" srcset="${data.image}">
                      <source media="(min-width: 380px)" srcset="${data.image}">
                      <img src="${data.image}" class=" " alt="Mi imagen responsive">
                    </picture>
                    <h2 class="divProductosModal__h2">${data.name}</h2>
                    <h3 class="divProductosModal__h3">${data.text}</h3>
                    <h4 class="divProductosModal__h4"><span>Precio: $ </span>${data.precio}</h4>
                </div>`;

    ventanaModalesEnsaladas.innerHTML = html;

    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modalEnsaladas'
    a.innerHTML = 'CERRAR';
    a.onclick = function () {

        ventanaModalEnsaladas.classList.add("hidden");
        ventanaModalesEnsaladas.classList.add("hidden");
        ventanaModalEnsaladas.classList.remove("modalHombreEnsaladas");
        return false;
    }
    ventanaModalEnsaladas.appendChild(a);
    ventanaModalEnsaladas.appendChild(ventanaModalesEnsaladas);

}