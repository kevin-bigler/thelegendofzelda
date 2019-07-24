import firstDungeon from '../dungeons/dungeonOne.js';
import secondDungeon from '../dungeons/dungeonTwo.js';
import thirdDungeon from '../dungeons/dungeonThree.js';
import fourthDungeon from '../dungeons/dungeonFour.js';
import fifthDungeon from '../dungeons/dungeonFive.js';
import sixthDungeon from '../dungeons/dungeonSix.js';
import seventhDungeon from '../dungeons/dungeonSeven.js';
import eighthDungeon from '../dungeons/dungeonEight.js';
import ninthDungeon from '../dungeons/dungeonNine.js';
import inventory from './inventory.js';
import Overworld from '../../overworld.js';
import { Vector } from '../math/vector.js';
import Message from './message.js';
import Game from './game.js';
let index = 0;
/**
 *
 *
 * @export
 * @class gameState
 */
export default class gameState {
	maps: any[];
	inventory: inventory;
	paused: boolean;
	transition: boolean;
	currentMap: Overworld;
	/**
	 *Creates an instance of gameState.
	 * @memberof gameState
	 */
	constructor() {
		this.maps = [
			new Overworld(),
			new firstDungeon(),
			new secondDungeon(),
			new thirdDungeon(),
			new fourthDungeon(),
			new fifthDungeon(),
			new sixthDungeon(),
			new seventhDungeon(),
			new eighthDungeon(),
			new ninthDungeon(),
		];
		this.inventory = new inventory();
		this.paused = false;
		this.transition = false;
		this.currentMap = this.maps[0];
	}

	set Map(num: number) {
		  if (num < 0 || num > 9) {
			  throw new Error('Dungeon not found');
		  } else {
			  this.currentMap = this.maps[num];
		}
	}

	changeScreen(
		position: Vector,
		game: Game,
		context: CanvasRenderingContext2D,
	) {
    let map = this.currentMap.position;
    
		if (position.x > 15) {
			position.x = 1;
			map.x += 1;
		}
		if (position.x < 0.7) {
			position.x = 14;
			map.x -= 1;
		}
		if (position.y > 9.7) {
			position.y = 1;
			map.y += 1;
		}
		if (position.y < 0.7) {
			position.y = 9;
			map.y -= 1;
		}
	}
	changeMap(position: Vector) {
		if (this.currentMap !== this.maps[0]) {
			//@ts-ignore
			this.currentMap.goToOverworld(position, this);
		} else {
			let dunLoc = [
				[7, 3, 7, 4],
				[12, 3, 7, 4],
				[4, 7, 8, 4],
				[5, 4, 8, 4],
				[11, 0, 7, 4],
				[2, 4, 7, 4],
				[2, 2, 7, 4],
				[13, 6, 10, 2],
				[5, 0, 5, 6],
			];
			dunLoc.forEach(([oX, oY, lX, lY], index) => {
				if (
					oX === this.currentMap.position.x &&
					oY === this.currentMap.position.y &&
					lX === Math.round(position.x) &&
					lY === Math.round(position.y)
				) {
					this.currentMap.theme.stop();
					this.currentMap = this.maps[index + 1];
					this.currentMap.theme.play();
					position.x = 7.6;
					position.y = 7.7;
				}
			});
		}
	}
	onMessage(msg: Message) {
		if (msg.from === 'controls') {
			//@ts-ignore
			this[msg.type] = !this[msg.type];
		}
	}
}
