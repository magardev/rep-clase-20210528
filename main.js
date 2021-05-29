/* Callbacks. */
const saludar = () => {
	console.log('Hola mundo!');
}

//setTimeout(saludar, 3000);
//console.log('Hola Antes!');

/* Promesas. */
const url_cachorros = 'https://dog.ceo/api/breeds/image/random/20';
const promesa_cachorro = fetch(url_cachorros);

/*
promesa_cachorro
.then(response => response.json())
.then(respuesta_perros => {
    const cachorros_img = respuesta_perros.message
        .map((img) => {
            return `<img src="${img}"`;
        }).join('')

    document.querySelector('#id_lista_perros').innerHTML = cachorros_img;
})
.catch((e) => {
    console.log(e.message);
});
*/
// Funciones asincronas: async / await
const desenhar_cachorros = async (url_cachorro) => {
    const res_cachorros = await fetch(url_cachorro);
    const dat_cachorros = await res_cachorros.json();
    console.log(dat_cachorros);
    const img_cachorros = dat_cachorros.message
        .map((img) => {
            return `
            <div class="card col-md-3" style="width: 18rem;">
                <h5 class="card-title">Cachorro</h5>
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <a href="${img}" class="btn btn-primary">Olhar Cachorro</a>
                </div>
            </div>            
            `;
        })
        .join("");

    document.querySelector('#id_lista_cachorros').innerHTML = img_cachorros;
}

desenhar_cachorros(url_cachorros);
