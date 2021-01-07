export default class Pokemon {
    constructor(data) {
        this.index = data.index
        this.id = data.id
        this.name = data.name
        this.img = data.sprites.other.dream_world.front_default
        this.moves = data.moves[1].move.name
        this.movess = data.moves[2].move.name
        this.weight = data.weight
        this.height = data.height
        this.types = data.types[0].type.name
        this.sectype = data.types[1].type.name || ''
        this.sprites = data.sprites.front_default

    }

    get Template() {
        return `
                <div class="card-top bg-dark text-white">
                    <h3>${this.name.toUpperCase()}</h3>
                </div>
                <div class="card-body">
                    <img src="${this.img}" alt="" srcset="" width="300"; height="300">
                    <p>${this.types} - ${this.sectype}</p>
                    <p><b>Height:</b> ${this.height} - <b>Weight:</b> ${this.weight}</p>
                </div>
                <div class="card-footer">
                    <p>${this.moves}</p>
                    <p>${this.movess}</p>
                </div>
                ${this.button}
        
        `
    }
    get button() {
        if (this.id) {
            return `<button class="btn btn-outline-success mb-1" onclick="app.myPokemonController.addPokemon()">Catch</button>`

        }

    }

}