import MyPokemonController from "./Controllers/MyPokemonController.js"
import PdexController from "./Controllers/PdexController.js"

class App {
  myPokemonController = new MyPokemonController()
  pdexController = new PdexController()
}

window["app"] = new App();
