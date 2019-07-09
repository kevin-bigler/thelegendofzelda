import inventory from "./inventory.js";
import Link from "../actors/link.js";
import Game from "./game.js";
import loadImage from "../../functions/getImage.js";

export default class Hud {
    map: string;
    rupees: any;
    bombs: any;
    keys: any;
    hearts: any;
    constructor(inventory:inventory,character:Link) {
  /*
  todo real map 
  */
        this.map = "Current Map";
        this.rupees = inventory.rupees;
        this.keys = inventory.keys;
        this.bombs = inventory.bombs;
        this.hearts = character.hearts;
    }
    show(context:CanvasRenderingContext2D,game:Game){
        context.fillStyle='saddleBrown'
        context.fillRect(0,60,game.width,game.height)
        context.fillStyle = 'black'
        context.fillRect(0,0,game.width,game.height*.25)
        loadImage('../../images/HUD.png')
        .then(data=>context.drawImage(data,260,11,250,55.5,0,0,game.width,game.height*.25))
    }
}
