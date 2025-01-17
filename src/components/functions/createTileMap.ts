import showGrid from "./showScreenGrid.js";
let points:Set<any> = new Set()
let map:[number,number,number,number][] =[ 
[ 0, 120, 32, 154 ], 
[ 0, 154, 32, 188 ], 
[ 0, 188, 32, 222 ], 
[ 0, 222, 32, 256 ], 
[ 0, 256, 32, 290 ], 
[ 0, 290, 32, 324 ], 
[ 0, 324, 32, 358 ], 
[ 0, 358, 32, 392 ], 
[ 0, 392, 32, 426 ], 
[ 0, 426, 32, 460 ], 
[ 32, 120, 64, 154 ], 
[ 32, 154, 64, 188 ], 
[ 32, 188, 64, 222 ], 
[ 32, 222, 64, 256 ], 
[ 32, 256, 64, 290 ], 
[ 32, 290, 64, 324 ], 
[ 32, 324, 64, 358 ], 
[ 32, 358, 64, 392 ], 
[ 32, 392, 64, 426 ], 
[ 32, 426, 64, 460 ], 
[ 64, 120, 96, 154 ], 
[ 64, 154, 96, 188 ], 
[ 64, 188, 96, 222 ], 
[ 64, 222, 96, 256 ], 
[ 64, 256, 96, 290 ], 
[ 64, 290, 96, 324 ], 
[ 64, 324, 96, 358 ], 
[ 64, 358, 96, 392 ], 
[ 64, 392, 96, 426 ], 
[ 64, 426, 96, 460 ], 
[ 96, 120, 128, 154 ], 
[ 96, 154, 128, 188 ], 
[ 96, 188, 128, 222 ], 
[ 96, 222, 128, 256 ], 
[ 96, 256, 128, 290 ], 
[ 96, 290, 128, 324 ], 
[ 96, 324, 128, 358 ], 
[ 96, 358, 128, 392 ], 
[ 96, 392, 128, 426 ], 
[ 96, 426, 128, 460 ], 
[ 128, 120, 160, 154 ], 
[ 128, 154, 160, 188 ], 
[ 128, 188, 160, 222 ], 
[ 128, 222, 160, 256 ], 
[ 128, 256, 160, 290 ], 
[ 128, 290, 160, 324 ], 
[ 128, 324, 160, 358 ], 
[ 128, 358, 160, 392 ], 
[ 128, 392, 160, 426 ], 
[ 128, 426, 160, 460 ], 
[ 160, 120, 192, 154 ], 
[ 160, 154, 192, 188 ], 
[ 160, 188, 192, 222 ], 
[ 160, 222, 192, 256 ], 
[ 160, 256, 192, 290 ], 
[ 160, 290, 192, 324 ], 
[ 160, 324, 192, 358 ], 
[ 160, 358, 192, 392 ], 
[ 160, 392, 192, 426 ], 
[ 160, 426, 192, 460 ], 
[ 192, 120, 224, 154 ], 
[ 192, 154, 224, 188 ], 
[ 192, 188, 224, 222 ], 
[ 192, 222, 224, 256 ], 
[ 192, 256, 224, 290 ], 
[ 192, 290, 224, 324 ], 
[ 192, 324, 224, 358 ], 
[ 192, 358, 224, 392 ], 
[ 192, 392, 224, 426 ], 
[ 192, 426, 224, 460 ], 
[ 224, 120, 256, 154 ], 
[ 224, 154, 256, 188 ], 
[ 224, 188, 256, 222 ], 
[ 224, 222, 256, 256 ], 
[ 224, 256, 256, 290 ], 
[ 224, 290, 256, 324 ], 
[ 224, 324, 256, 358 ], 
[ 224, 358, 256, 392 ], 
[ 224, 392, 256, 426 ], 
[ 224, 426, 256, 460 ], 
[ 256, 120, 288, 154 ], 
[ 256, 154, 288, 188 ], 
[ 256, 188, 288, 222 ], 
[ 256, 222, 288, 256 ], 
[ 256, 256, 288, 290 ], 
[ 256, 290, 288, 324 ], 
[ 256, 324, 288, 358 ], 
[ 256, 358, 288, 392 ], 
[ 256, 392, 288, 426 ], 
[ 256, 426, 288, 460 ], 
[ 288, 120, 320, 154 ], 
[ 288, 154, 320, 188 ], 
[ 288, 188, 320, 222 ], 
[ 288, 222, 320, 256 ], 
[ 288, 256, 320, 290 ], 
[ 288, 290, 320, 324 ], 
[ 288, 324, 320, 358 ], 
[ 288, 358, 320, 392 ], 
[ 288, 392, 320, 426 ], 
[ 288, 426, 320, 460 ], 
[ 320, 120, 352, 154 ], 
[ 320, 154, 352, 188 ], 
[ 320, 188, 352, 222 ], 
[ 320, 222, 352, 256 ], 
[ 320, 256, 352, 290 ], 
[ 320, 290, 352, 324 ], 
[ 320, 324, 352, 358 ], 
[ 320, 358, 352, 392 ], 
[ 320, 392, 352, 426 ], 
[ 320, 426, 352, 460 ], 
[ 352, 120, 384, 154 ], 
[ 352, 154, 384, 188 ], 
[ 352, 188, 384, 222 ], 
[ 352, 222, 384, 256 ], 
[ 352, 256, 384, 290 ], 
[ 352, 290, 384, 324 ], 
[ 352, 324, 384, 358 ], 
[ 352, 358, 384, 392 ], 
[ 352, 392, 384, 426 ], 
[ 352, 426, 384, 460 ], 
[ 384, 120, 416, 154 ], 
[ 384, 154, 416, 188 ], 
[ 384, 188, 416, 222 ], 
[ 384, 222, 416, 256 ], 
[ 384, 256, 416, 290 ], 
[ 384, 290, 416, 324 ], 
[ 384, 324, 416, 358 ], 
[ 384, 358, 416, 392 ], 
[ 384, 392, 416, 426 ], 
[ 384, 426, 416, 460 ], 
[ 416, 120, 448, 154 ], 
[ 416, 154, 448, 188 ], 
[ 416, 188, 448, 222 ], 
[ 416, 222, 448, 256 ], 
[ 416, 256, 448, 290 ], 
[ 416, 290, 448, 324 ], 
[ 416, 324, 448, 358 ], 
[ 416, 358, 448, 392 ], 
[ 416, 392, 448, 426 ], 
[ 416, 426, 448, 460 ], 
[ 448, 120, 480, 154 ], 
[ 448, 154, 480, 188 ], 
[ 448, 188, 480, 222 ], 
[ 448, 222, 480, 256 ], 
[ 448, 256, 480, 290 ], 
[ 448, 290, 480, 324 ], 
[ 448, 324, 480, 358 ], 
[ 448, 358, 480, 392 ], 
[ 448, 392, 480, 426 ], 
[ 448, 426, 480, 460 ], 
[ 480, 120, 512, 154 ], 
[ 480, 154, 512, 188 ], 
[ 480, 188, 512, 222 ], 
[ 480, 222, 512, 256 ], 
[ 480, 256, 512, 290 ], 
[ 480, 290, 512, 324 ], 
[ 480, 324, 512, 358 ], 
[ 480, 358, 512, 392 ], 
[ 480, 392, 512, 426 ], 
[ 480, 426, 512, 460 ] ] 
let offset = 50
let topleft = [[0,0],[32,0],[0,34],[0,0]]
let topright = [[0,0],[32,0],[32,32],[0,0]]
let botleft = [[0,0],[32,34],[0,34],[0,0]]
let botright = [[32,0],[32,34],[0,34],[32,0]]
let square = [[0, 0],[0, 34],[32, 34],[32, 0]]
let shapes = [topleft,topright,botleft,botright,square]



function createTileMap(context: CanvasRenderingContext2D) {
  showGrid(context);
  let shape = document.getElementById('Select') as HTMLSelectElement
 
  document.addEventListener("click", event => {
    let shapeCode:string = shape.value
    for(let i = 0 ; i < map.length;i++){
      if(event.clientX>=map[i][0]&&event.clientX<=map[i][2]&&
        event.clientY>=map[i][1]&&event.clientY<=map[i][3]){
          /*                             X         Y      W  H    Shape        */
          points.add(JSON.stringify([map[i][0],map[i][1],32,34,shapeCode]))
        }
    }
  });
  let value:string
  for(value of points){
    let cell:[number,number,number,number,number] = JSON.parse(value)
      context.beginPath()
      context.moveTo( shapes[cell[4]][0][0]+cell[0], shapes[cell[4]][0][1]+cell[1])
      context.lineTo( shapes[cell[4]][1][0]+cell[0], shapes[cell[4]][1][1]+cell[1])
      context.lineTo( shapes[cell[4]][2][0]+cell[0], shapes[cell[4]][2][1]+cell[1])
      context.lineTo( shapes[cell[4]][3][0]+cell[0], shapes[cell[4]][3][1]+cell[1])
      context.fill()
   }
}
export function exportTiles (){
  let button = document.createElement('button');
  let tiles:any[] = []
  button.innerText = 'Export';
  document.body.appendChild(button);
  button.addEventListener('click',()=>{
    for(let value of points){
      //@ts-ignore
      let cell = JSON.parse([value])
      //@ts-ignore
      tiles.push([cell])
     }
     navigator.clipboard.writeText(`[${tiles}]`).then(()=>{console.log('copied')})
  })
  
}
export function showTileMap(tilemap:[[number,number,number,number,number]],context:CanvasRenderingContext2D){
  if(tilemap!==undefined){
    console.log(tilemap)
    
  for(let tile = 0  ;tile<tilemap.length;tile++){
    console.log(tilemap[tile])
    context.beginPath()
    context.moveTo( shapes[tilemap[tile][4]][0][0]+tilemap[tile][0],shapes[tilemap[tile][4]][0][1]+tilemap[tile][1])
    context.lineTo( shapes[tilemap[tile][4]][1][0]+tilemap[tile][0],shapes[tilemap[tile][4]][1][1]+tilemap[tile][1])
    context.lineTo( shapes[tilemap[tile][4]][2][0]+tilemap[tile][0],shapes[tilemap[tile][4]][2][1]+tilemap[tile][1])
    context.lineTo( shapes[tilemap[tile][4]][3][0]+tilemap[tile][0],shapes[tilemap[tile][4]][3][1]+tilemap[tile][1])
    context.fill()
  }
}
}

export function eraseTiles(){
  points.clear()
  navigator.clipboard.writeText('Cleared!')
}
export default createTileMap;

