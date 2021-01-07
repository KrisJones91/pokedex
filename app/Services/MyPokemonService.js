import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService {

    async getAllPokemon() {
        let res = await sandboxApi.get('')
        ProxyState.myPoke = res.data.map(p => new Pokemon(p))
    }
    getPokemon(id) {
        let poke = ProxyState.myPoke.find(p => p.id === id)
        ProxyState.activePoke = poke
    }

    async addPokemon() {
        let res = await sandboxApi.post('', ProxyState.activePoke)
        ProxyState.myPoke = [...ProxyState.myPoke, new Pokemon(res.data)]
    }

    async removePokemon() {
        let res = await sandboxApi.delete(ProxyState.activePoke.name)
        ProxyState.myPoke = ProxyState.myPoke.filter(p => p.id !== ProxyState.activePoke.id)
        ProxyState.activePoke = null
    }


}
export const myPokemonService = new MyPokemonService();