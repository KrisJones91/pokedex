import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pdexApi } from "./AxiosService.js";



class PdexService {

    async getAllPokemon() {
        let res = await pdexApi.get('pokemon?limit=100')
        ProxyState.pdexPoke = res.data.results
    }
    async getPokemon(id) {
        let res = await pdexApi.get(`pokemon/${id}`)
        ProxyState.activePoke = new Pokemon(res.data)

    }
}
export const pdexService = new PdexService();