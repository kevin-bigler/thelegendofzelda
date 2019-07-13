import Game from './game';
import loadImage from '../../functions/getImage.js';
import { Vector } from '../math/vector.js';

export default class pauseScreen {
	position: Vector;
    frame: number;
	constructor() {
        this.position = new Vector();
        this.frame = 0;
	}
	minimap(context: CanvasRenderingContext2D) {
        this.frame++
        let color = this.frame % 10 ? 0 : 1 ;
        let colors = [ 'lightGrey','Grey']
		let x = (130 / 14) * this.position.x + 31;
		let y = (77 / 8) * this.position.y + 385;
		context.fillStyle = colors[1];
		context.fillRect(31, 385, 130, 77);

		context.fillStyle = 'black';
		context.fillRect(31, 366, 130, 19);

		context.fillStyle = colors[color];
		context.fillRect(x, y, 9, 9);
	}
	show(game: Game) {
		this.position = game.camera.position;
		let screen = async () => {
			let canvas = document.createElement(
				'canvas',
			) as HTMLCanvasElement;
			canvas.width = game.width;
			canvas.height = game.height;
			let context = canvas.getContext(
				'2d',
			) as CanvasRenderingContext2D;

			let imageOne = await loadImage(game.json.urls.hud);
			const HUD: HTMLImageElement = await imageOne;
			context.drawImage(HUD, ...game.json.hud.inventory); //*inventory
			context.drawImage(HUD, ...game.json.hud.triforce); //*triforce
			context.drawImage(HUD, ...game.json.hud.top); //*hud
			this.minimap(context);
			return canvas;
		};

		return screen;
	}
}
