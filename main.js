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


const desenhar_gifs = async (url_gifs) => {
    const res_gifs = await fetch(url_gifs);
    const dat_gifs = await res_gifs.json();
    
    const html_gifs = dat_gifs.data
    .map((gif) => {
      return `
        <div class="card col-md-3" style="width: 18rem;">
            <h5 class="card-title">${gif.title}</h5>
            <img src="${gif.images.original.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <a href="${gif.url}" target="_blank" class="btn btn-primary">Olhar Gif</a>
            </div>
        </div>            
        `;
    }).join("");
  document.querySelector('#id_lista_gifs').innerHTML = html_gifs;
}

function pesquisar_gifs() {
    const palavra = document.getElementById('id_palavra').value;
    const url_gifs = `http://api.giphy.com/v1/gifs/search?q=${palavra}&api_key=30lsTyzcd3RYHBxU0SFxNA0XwuKW92u5&limit=10`;

    try {
        if (palavra !== '') {
            desenhar_gifs(url_gifs);
        }
    } catch (error) {
        console.log(error);
    }
}
