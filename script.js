    
let quantPokemon = document.getElementById('quantidade')    
let btn = document.getElementById('btnPokemon')

btn.addEventListener('click', () => {

    catchPokemon(quantPokemon.value)

})

function catchPokemon(quantidade){

    quantPokemon.value = ""

    if(quantidade > 151){
        alert('O número máximo de pokemons é 151')
        quantidade = 151
    }

    // Requisição Fetch
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        let boxes = document.querySelector(".pokemon-boxes")
        boxes.innerHTML = ""
        let pokemons = []

        allpokemon.results.map((val) => {

            // fetch para pegar nome e imagem dos pokemons
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {

                // add nome e imagem ao array, referente ao pokemon
                pokemons.push({
                    nome: val.name,
                    image: pokemonSingle.sprites.front_default
                })

                if(pokemons.length == quantidade){
                    // Finalizando a requisição

                    pokemons.map((val) => {

                        let boxes = document.querySelector(".pokemon-boxes")

                        boxes.innerHTML += `

                        <div class="pokemon-cards">
                            <img src="`+val.image+`" >
                            <p>`+val.nome+`</p>
                        </div>

                        `

                    })

                }

            })

        })

    })

}
