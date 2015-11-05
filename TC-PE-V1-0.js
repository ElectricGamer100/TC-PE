/*This mod has been ported by MCElectricGamer. There is another Tinkers Construct ported to MC:PE by MinecraftMuse*/

var TCPE = {};
TCPE.texture = {};
TCPE.item = {};
TCPE.tile = {};

//Wood
TCPE.texture.wood = {};
TCPE.texture.wood.rod = "rod_wood";
TCPE.texture.wood.chunk = "chunk_wood";

//Wood
TCPE.item.wood = {};
TCPE.item.wood.rod = 500;
TCPE.item.wood.chunk = 501;

//Stone
TCPE.item.stone = {};

//Flint
TCPE.item.flint = {};

//Iron
TCPE.item.iron = {};

TCPE.setItem = function(id,name,texture,textureData,maxStackSize){ModPE.setItem(id,texture,textureData,name,maxStackSize);}
TCPE.useOn = function(x,y,z,i,b,s,id,bd){
}
TCPE.tick = function(){
}

TCPE.setItem(TCPE.item.wood.rod,"Wooden Rod",TCPE.texture.wood.rod,0,64);

//ModPE Hooks
function useItem(x,y,z,i,b,s,id,bd){TCPE.useOn(x,y,z,i,b,s,id,bd);}
function modTick(){TCPE.tick();}
