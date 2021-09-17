// Requisição Fetch

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(allpokemon => {

        let pokemons = []

        allpokemon.results.map((val) => {

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {

                pokemons.push({
                    nome: val.name,
                    image: pokemonSingle.sprites.front_default
                })

                if(pokemons.length == 151){
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