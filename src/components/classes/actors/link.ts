import { Vector } from "../math/vector.js";
import Message from "../systems/message.js";

/**
 *
 *
 * @export
 * @class Link
 * @description Will encapsulate Link , including health , position 
 */
export default class Link {
    hearts: number;
    health: number;
    position: Vector;
    frameAdjusted: number;
    action: string;
    shield: string;
    direction: string;
    blocked:string[]
    constructor(){
        this.frameAdjusted = 0 
        this.hearts = 3;
        this.health = 3;
        this.position = new Vector(7,5)
        this.action = 'walk'
        this.shield = 'small'
        this.direction = 'right'
        this.blocked = [];
    }
    show(){
        let str = `link-${this.action}-${this.direction}-${this.frameAdjusted%2+1}-${this.shield}`
        return str
    }
    move(msg:Message){
        //@ts-ignore
        this[msg.type] = msg.data;
        if(msg.data==="right" && !this.blocked.includes(msg.data)){
            this.blocked=[]
            this.position.x+=.2
        }
        if(msg.data==="down"  && !this.blocked.includes(msg.data)){
            this.blocked = []
            this.position.y+=.2
        }
        if(msg.data==="left"  && !this.blocked.includes(msg.data)){
            this.blocked = []
            this.position.x-=.2
        }
        if(msg.data==="up"    && !this.blocked.includes(msg.data)){
            this.blocked = []
            this.position.y-=.2
        }
        this.frameAdjusted++
        //this.blocked = []
    }
    blocks(msg:Message){
        this.blocked.push(msg.data);
        
    }
    onMessage(msg:Message){
    if (msg.from === 'collisions'){
        this.blocks(msg)
    }
    if(msg.from === 'controls'){
        this.move(msg)
    }
    }
}