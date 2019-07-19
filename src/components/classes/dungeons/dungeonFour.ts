import Dungeon from "./dungeons.js";
import { Vector } from "../math/vector.js";
import gameState from "../systems/gameState.js";

export default class fourthDungeon extends Dungeon{
  constructor(){
    super('fourthDungeon',["map","compas","stepLadder","heartContainer","shardFour"])
    this.position = new Vector(1,7);
    this.url = "https://raw.githubusercontent.com/miaklwalker/thelegendofzelda/master/images/dungeons/zelda-dungeon4.png"
  }
  goToOverworld(position:Vector,gameState:gameState){
    let exit = [1,7,7.5,9];
    const [x,y,px,py] = exit
    if(this.position.x===x&&this.position.y===y&&position.x>=px&&position.y>=py){
      gameState.Map = 0
      position.x = 8
      position.y = 5
    }
  }
  }