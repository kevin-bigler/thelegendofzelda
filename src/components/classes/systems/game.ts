import Hud from './hud.js';
import gameState from './gameState.js';
import Link from '../actors/link.js';
import camera from './camera.js';
import pauseScreen from './pauseScreen.js';
import loadImage from '../../functions/getImage.js';
import RootObject from '../../objects/interfaces.js';
import SpriteSheet from './SpriteSheet.js';
import Controls from './controls.js';
import MessageQueue from './messageQueue.js';
import config from '../../objects/config.js';

/**
 *
 *
 * @export
 * @class Game
 * @param width The width of the game screen
 * @param height The hieght of the game screen
 * @param json A Json containing all of the games files
 *
 */
export default class Game {
	width: number;
	height: number;
	gameState: gameState;
	hud: Hud;
	Link: Link;
	json: RootObject;
	camera: camera;
	pauseScreen: pauseScreen;
	images: SpriteSheet[];
	controls: Controls;
    messageCenter: MessageQueue;
	/**
	 *Creates an instance of Game.
	 * @param {number} width
	 * @param {number} height
	 * @param {*} json
	 * @memberof Game
	 */
	constructor(width: number, height: number, json: any) {
		this.width = width;
		this.height = height;
		this.gameState = new gameState();
		this.Link = new Link();
		this.hud = new Hud(this);
		this.controls = new Controls(config);
		this.json = json;
		this.camera = new camera();
        this.pauseScreen = new pauseScreen();
        this.messageCenter = new MessageQueue(this);
		this.images = [];
	}
	/**
	 *
	 *
	 * @param {CanvasRenderingContext2D} context
	 * @memberof Game
	 */
	makeGameScreen(context: CanvasRenderingContext2D) {
		this.gameState.Map = 0;
		let pauseMenu = this.pauseScreen.show(this);
		let paused = this.gameState.paused ? 0 : -360;
		this.camera.show(this, context);
		if (this.images[0] !== undefined) {
			this.images[5].renderSprite(context, this.Link.show(), [
				this.Link.position.x*32,
				this.Link.position.y*34+120,
				30,
				30,
			]);
			console.log(this.Link.position)
            context.drawImage(pauseMenu(), 0, paused, 512, 480);
            this.rungame()
		}
	}
	rungame() {
        this.controls.setupControls(this.messageCenter)
        this.messageCenter.dispatch()
    }
	/**
	 *
	 *
	 * @memberof Game
	 */
	loadFiles() {
		let iterator = 0;
		let names = Object.keys(this.json.urls);
		let images = Object.values(this.json.urls).map(url =>
			loadImage(url),
		);
		Promise.all(images).then((response: HTMLImageElement[]) => {
			response.forEach(res => {
				let spriteSheet = new SpriteSheet(res, names[iterator]);
				if (names[iterator] == 'link') {
					spriteSheet.makeSprites(this.json);
				}
				this.images.push(spriteSheet);
				iterator++;
			});
		});
	}
}
