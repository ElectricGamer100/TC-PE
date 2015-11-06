/*This mod has been ported by MCElectricGamer. There is another Tinkers Construct ported to MC:PE by MinecraftMuse*/

var TCPE = {};
TCPE.texture = {};
TCPE.item = {};
TCPE.tile = {};

//Wood
TCPE.texture.wood = {};
TCPE.texture.wood.rod = "rod_wood";
TCPE.texture.wood.chunk = "chunk_wood";
TCPE.texture.wood.axeHead = "axehead_wood";
TCPE.texture.wood.pickaxeHead = "pickaxehead_wood";
TCPE.texture.wood.shovelHead = "shovelhead_wood";

//Wood
TCPE.item.wood = {};
TCPE.item.wood.rod = 500;
TCPE.item.wood.chunk = 501;
TCPE.item.wood.axeHead = 502;
TCPE.item.wood.pickaxeHead = 503;
TCPE.item.wood.shovelHead = 504;

//Tiles
TCPE.tile.searedBrick = 200;
TCPE.tile.smelteryControllerOff = 201;
TCPE.tile.smelteryControllerOn = 202;

//Stone
TCPE.item.stone = {};

//Flint
TCPE.item.flint = {};

//Iron
TCPE.item.iron = {};

TCPE.setItem = function(id,name,texture,textureData,maxStackSize){ModPE.setItem(id,texture,textureData,name,maxStackSize);}
TCPE.setTile = function(id,name,texture,material,isOpaque,render,lightLevel,lightOpacity,destroyTime,explosionResistance){Block.defineBlock(id,name,texture,material,isOpaque,render);Block.setLightLevel(id,lightLevel);Block.setLightOpacity(lightOpacity);Block.setDestroyTime(id,destoryTime);Block.setExplosionResistance(id,explosionResistance);}

TCPE.useOn = function(x,y,z,i,b,s,id,bd){
}
TCPE.tick = function(){
}

TCPE.setItem(TCPE.item.wood.rod,"Wooden Rod",TCPE.texture.wood.rod,0,64);
TCPE.setItem(TCPE.item.wood.chunk,"Wooden Chunk",TCPE.texture.wood.chunk,0,64);
TCPE.setItem(TCPE.item.wood.axeHead,"Wooden Axe Head",TCPE.texture.wood.axeHead,0,64);
TCPE.setItem(TCPE.item.wood.pickaxeHead,"Wooden Pickaxe Head",TCPE.texture.wood.pickaxeHead,0,64);
TCPE.setItem(TCPE.item.wood.shovelHead,"Wooden Shovel Head",TCPE.texture.wood.shovelHead,0,64);

TCPE.setTile(TCPE.tile.searedBrick,"Seared Brick",["searedbrick",0],1,0,0,0,0,2,1);

//ModPE Hooks
function useItem(x,y,z,i,b,s,id,bd){TCPE.useOn(x,y,z,i,b,s,id,bd);}
function modTick(){TCPE.tick();}
