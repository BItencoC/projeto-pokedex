var requestURL = 'https://bitencoc.github.io/projeto-pokedex/src/data/data.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function () {
    var pokemonsRequest = request.response;
    showPokemons(pokemonsRequest);
}

function showPokemons(jsonObj) {
    var pokemons = jsonObj['list']
    const PokemonUl = document.querySelector('.listagem-pokemon');

    for (var i = 0; i < pokemons.length; i++) {
        const PokemonCard = createEl("li", "class", "cartao-pokemon")
        const divInfo = createEl("div", "class", "informacoes")
        const spanName = createEl("span")
        const spanNumber = createEl("span")
        const img = createEl("img", "class", "gif")
        const pokemonDescription = createEl("p", "class", "descricao")
        const pokemonTypes = createEl("ul", "class", "tipos")

        spanName.textContent = pokemons[i].name
        spanNumber.textContent = pokemons[i].number

        divInfo.appendChild(spanName)
        divInfo.appendChild(spanNumber)

        img.src = pokemons[i].img
        pokemonDescription.innerText = `${pokemons[i].description}`

        const nameClass = pokemons[i].typeName
        const nameItem = pokemons[i].type

        for (var j = 0; j < nameClass.length; j++) {
            var listItem = createEl("li", "class", pokemons[i].typeName[j])
            listItem.textContent = nameItem[j];
            pokemonTypes.appendChild(listItem);
        }

        PokemonCard.appendChild(divInfo)
        PokemonCard.appendChild(img)
        PokemonCard.appendChild(pokemonTypes)
        PokemonCard.appendChild(pokemonDescription)
        PokemonUl.appendChild(PokemonCard);
    }
}


function createEl(item, type, name) {
    const element = document.createElement(item)
    element.setAttribute(type, name)
    return element
}

const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagenBotaoTrocaTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode")

    if (darkModeOn) {
        imagenBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagenBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }
})

showPokemons()
