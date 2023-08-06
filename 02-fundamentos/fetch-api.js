// Fetch

// fetch('https://pokeapi.co/api/v2/pokemon/') // Consumimos el API
//     .then( res => res.json() ) // Como el api es una informacion que viene en JSon la transformamos
//     .then( data => { // Aqui volvemos a leer la informacion
//         // console.log(data.results);
//         data.results.forEach( element => {
//             console.log(element.name);
//         })
//     })
//     .catch( error => console.log(error));


fetch('https://rickandmortyapi.com/api/character')
    .then( res => res.json() )
    .then( data => {
        data.results.forEach( element => {
            console.log(element.name);
        })
    } )
    .catch( error => console.log(error))


fetch('https://rickandmortyapi.com/api/episode')
    .then( res => res.json() )
    .then( data => {
        data.results.forEach( (caps) => {
            console.log(caps.name);
            
        })
        
    })
    .catch( (error) => {
        console.log(`Ups, Error al optener la data, Ingrese una URL Valida. ${error}`);
        
    })