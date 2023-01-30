import { appState } from "../AppState.js";
import { getFormData } from "../Utils/FormHandler.js";

export class PlayersController {
    drawPlayers() {
      // get Players from appstate
    let Players = appState.players
    console.log('drawing Players', Players);
      // create empty placeholder
    let names = ''
      // itterate over Players and add their names to name place holder
    Players.forEach(Player => names += Player.HTMLTemplate)
      // set all names to the dom
    document.getElementById('Players').innerHTML = names
    }

    createPlayer() {
      window.event.preventDefault()
      const form = window.event.target // target pulls the html where the even originated from
    console.log('Creating Player', form);
      // create object to store data
      // form/what you input is named / value inputed by user
      // let PlayerData = {
      //   name: form.name.value,
      //   level: form.level.value,
      //   health: form.health.value
      // }
      // NOTE old-school way above
      //NOTE the getFormData is imported from the utility file
    let PlayerData = getFormData(form)
    PlayersService.createPlayer(PlayerData)
    console.log(PlayerData);
    this.drawPlayers()
    }
    // NOTE the constructor runs when the NEW keyword is used to create a controller (or on load)
    constructor() {
    console.log('constructor ran');
    this.drawPlayers()
    }

}