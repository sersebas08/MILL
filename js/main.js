/*const desayuno = document.getElementById('desa');
desayuno.onclick = cambio;

let sentido = 0;
function cambio (){
    const menu = document.getElementById('menu');
    if (sentido === 0) {
        menu.style.display = 'flex';
        sentido = 1;
    } else{
        menu.style.display = 'none';
        sentido = 0;
    }



}*/
document.addEventListener('DOMContentLoaded', (e) => {
    log();

})


function log () {
    /*const { latitude, longitude } = position.coords;*/

   fetch('productos.json')
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



function leerProductos(data){
   let dataAppi = {
      nombre: data.title,
      precio: data.precio
   }
   console.log(dataAppi.nombre);
    const leerJson = document.querySelector('.leerJson');
    leerJson.innerHTML += `<div class="divProductos drop-shadow-lg">
                                <div class="w-3/6">
                                    <picture class="flex m-auto">
                                        <source media="(min-width: 751px)" srcset="img/cafe-con-leche.jpg">
                                        <source media="(min-width: 380px)" srcset="img/cafe-con-leche.jpg">
                                        <img src="img/cafe-con-leche.jpg" class="w-full h-32 " alt="Mi imagen responsive">
                                    </picture>
                                </div>
                                <div class="divProductos__div w-3/6">
                                    <h3 class="divProductos__h3">${dataAppi.nombre}</h3>
                                    <p class="divProductos__p"><span>Precio: $</span>${dataAppi.precio}</p>
                                </div>
                            </div>`;

}

/*{
   data.forEach(data => {
      console.log(data)
   })
}*/
/*console.log('este es el resultado: ', log);*/

