import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js"


function _drawPokemon() {
    let template = ''
    ProxyState.myPoke.forEach(p => {
        template += `<li class="action" onclick="app.myPokemonController.getPokemon(${p.index})">${p.name}</li>`
    })
    document.getElementById('my-poke').innerHTML = template
}



export default class MyPokemonController {
    constructor() {
        ProxyState.on('myPoke', _drawPokemon)

        this.getAllPokemon()
    }

    getAllPokemon() {
        try {
            myPokemonService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    getPokemon(name) {
        try {
            myPokemonService.getPokemon(name)
        } catch (error) {
            console.error(error)
        }

    }

    addPokemon() {
        try {
            myPokemonService.addPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    removePokemon() {
        try {
            myPokemonService.removePokemon()
        } catch (error) {
            console.error(error)
        }
    }

}