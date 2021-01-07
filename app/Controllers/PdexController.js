import { ProxyState } from "../AppState.js";
import { pdexService } from "../Services/PdexService.js";


function _drawPokemon() {
    let template = ''
    ProxyState.pdexPoke.forEach(p => {
        template += `<li class="adder: font-weight-bold" style="text-transform" onclick = "app.pdexController.getPokemon('${p.name}')">${p.name}</li>`

    })
    document.getElementById("api-poke").innerHTML = template
}

function _drawActivePoke() {
    let template = ''
    if (ProxyState.activePoke) {
        template = ProxyState.activePoke.Template
    }
    document.getElementById("pokemonCard").innerHTML = template
}


export default class PdexController {
    constructor() {
        ProxyState.on('pdexPoke', _drawPokemon)
        ProxyState.on('activePoke', _drawActivePoke)

        this.getAllPokemon()
    }



    getAllPokemon() {
        try {
            pdexService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }
    getPokemon(name) {
        try {
            pdexService.getPokemon(name)
        } catch (error) {
            console.error(error)
        }
    }

}