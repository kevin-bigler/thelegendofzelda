import { Vector } from "../math/vector.js";
import loadImage from "../../functions/getImage.js";
import Game from "./game";
import createTileMap from "../../functions/createTileMap.js";

export default class camera {
  position: Vector;
  constructor() {
    this.position = new Vector();
  }

  show(game: Game, context: CanvasRenderingContext2D) {
    let paused = game.gameState.paused ? 480 : 120;
    let w = 256;
    let { x, y } = this.position;
    let { url } = game.gameState.currentMap;
    loadImage(url).then(data => {
      this.position = game.gameState.currentMap.position;
      context.drawImage(data, x * w, y * 176.1, w, 405, 0, paused, 512, 863);
      createTileMap(context)
    });
  }
  move(game: Game) {}
}
