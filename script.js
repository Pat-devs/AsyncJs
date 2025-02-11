// API intro

// Makes a request to a url, and returns a promise
async function handleFetch() {
    // 1. Make a request
    const request = await fetch("https://pokeapi.co/api/v2/")
    // 2. if #1 went well, get (download) the data
    const data = await request.json()


    return data

    //console.log(data2)
}


/* console.log(1)
console.log(2)
console.log(handleFetch())
console.log(3)
console.log(4)
console.log(5) */
// get the div element
const containerEl = document.querySelector("div")


async function displayPokemons(pokemonListPromise) {
    let pokemonList = await pokemonListPromise

    // convert an object to an array (so that we can loop through it):
    const pokemonListArray = Object.entries(pokemonList)

    for (const pokemonLink of pokemonListArray) {
        containerEl.innerHTML += `<a href="${pokemonLink[1]}">${pokemonLink[0]}</a><br>`
    }
}
//displayPokemons(handleFetch())








/// alt løsning:


// Makes a request to a url, and returns a promise
async function handleFetchToo(callback) {
    // 1. Make a request
    const request = await fetch("https://pokeapi.co/api/v2/")
    // 2. if #1 went well, get (download) the data
    const data = await request.json()


    callback(data)

    //console.log(data2)
}


function displayPokemonsToo(pokemonList) {

    // convert an object to an array (so that we can loop through it):
    const pokemonListArray = Object.entries(pokemonList)

    for (const pokemonLink of pokemonListArray) {
        containerEl.innerHTML += `<a href="${pokemonLink[1]}">${pokemonLink[0]}</a><br>`
    }
}

handleFetchToo(displayPokemonsToo)


let myVar = 1234
let myVarToo = "bokstaver.."
let myVarAlsoToo = [1,5,6136]
let myVarAlsoTooToo = { name: "Js" }
let myVarAlsoTooTooToo = new Audio()

let minVar = function() {
    console.log("Hi")
}

function minFunksjon() {
    console.log("Hi")
}

let minPil = () => { 
    console.log("Hi")
}

minFunksjon()


// function takes a username, a custom greeting message and an output destination (like console or webpage display function)
function fancyGreeter(userName, message, output) {
    let finalMessage = userName + ", " + message

    //console.log(typeof output())
    output(finalMessage)
    //return to output
}

//fancyGreeter("Bob", "how are you?", console.log)

//fancyGreeter("Bob", "how are you?", displayGreetingOnPage)


let log = function(message) {
    console.log(message)   
}

//log("hi")
















function displayGreetingOnPage(greeting) {
    document.body.innerText += greeting
}
