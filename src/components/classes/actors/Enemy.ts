import { Vector } from "../math/vector.js";
import Message from "../systems/message.js";
import uniqueid from "../../functions/createId.js";

export default class enemy{
    behavior: number;
    health: number;
    position: Vector;
    name: string;
    action: string;
    color: string;
    frames: number;
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    direction: string;
    id: string;
    constructor(name:string){
        this.position = new Vector(7,3)
        this.id = uniqueid()
        this.behavior=0;
        this.health=0;
        this.name = name;
        this.action = 'walk';
        this.color = 'red';
        this.direction = 'down'
        this.frames = 0;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false
    }
    show(){
        let str = `${this.color}-${this.name}-${this.action}-${this.frames}`
        return str
    }
    
    move(){
        

    }
    chooseBehavior(numOfBehaviors:number,behaviors:string[]){
        let behavior = Math.floor(Math.random()*numOfBehaviors)
        this.action =  behaviors[behavior]
    }
    chooseDirection(){
        let dirNum = Math.floor(Math.random()*4);
        let directions = ['left','right','up','down']
        this.direction = directions[dirNum]
    }
    onMessage(msg:Message){
        if (msg.from === 'collisions'){
            
        }
        if(msg.from === 'controls'){
            
        } 
    }
}