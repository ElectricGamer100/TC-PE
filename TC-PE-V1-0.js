/*This mod has been ported by MCElectricGamer. There is another Tinkers Construct ported to MC:PE by MinecraftMuse*/

var TCPE = {};
TCPE.texture = {};
TCPE.item = {};
TCPE.tile = {};

//Wood
TCPE.texture.wood = {};
TCPE.texture.wood.rod = "rod_wood";
TCPE.texture.wood.chunk = "chunk_wood";
TCPE.texture.wood.axehead = "axehead_wood";
TCPE.texture.wood.pickaxehead = "pickaxehead_wood";
TCPE.texture.wood.shovelhead = "shovelhead_wood";

//Wood
TCPE.item.wood = {};
TCPE.item.wood.rod = 500;
TCPE.item.wood.chunk = 501;
TCPE.item.wood.axehead = 502;
TCPE.item.wood.pickaxehead = 503;
TCPE.item.wood.shovelhead = 504;

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
TCPE.setItem(TCPE.item.wood.axehead,"Wooden Axe Head",TCPE.texture.wood.axehead,0,64);
TCPE.setItem(TCPE.item.wood.pickaxehead,"Wooden Pickaxe Head",TCPE.texture.wood.pickaxehead,0,64);
TCPE.setItem(TCPE.item.wood.shovelhead,"Wooden Shovel Head",TCPE.texture.wood.shovelhead,0,64);

//ModPE Hooks
function useItem(x,y,z,i,b,s,id,bd){TCPE.useOn(x,y,z,i,b,s,id,bd);}
function modTick(){TCPE.tick();}
