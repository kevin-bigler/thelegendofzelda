import RootObject from "../../objects/interfaces";





interface SpriteSheetCor {
[key:string]:any
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
}
/**
 *
 *
 * @export
 * @class SpriteSheet
 */
export default class SpriteSheet{
    sheet: HTMLImageElement;
    name: string;
    sprites: Object;
    constructor(image:HTMLImageElement,name:string){
        this.sheet = image;
        this.name = name;
        this.sprites = {};
    }
    /**
     *
     *
     * @param {RootObject} json
     * @memberof SpriteSheet
     * @description takes a string " 'name''direction'-'number(as word)'-'action'-'shieldSize'  "
     * and uses it as the key for an array of values
     */
    makeSprites(json:RootObject){
        //@ts-ignore
        json.Sprites[this.name].forEach((Sprite:SpriteSheetCor)=>{
            if(this.name === "link"||this.name == 'enemy'){
                //@ts-ignore
            this.sprites[Sprite.name]=[Sprite.x,Sprite.y,Sprite.w,Sprite.h]
            }
        })
    }

    renderSprite(context:CanvasRenderingContext2D,action:string,location:[number,number,number,number]){
        //@ts-ignores
        context.drawImage(this.sheet,...this.sprites[action],...location)
    }
}