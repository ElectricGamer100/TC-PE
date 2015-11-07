/*This mod has been ported by MCElectricGamer. There is another Tinkers Construct ported to MC:PE by MinecraftMuse*/

var TCPE = {};
TCPE.durability = {};
TCPE.handleModifier = {};
TCPE.miningLevel = {};
TCPE.miningSpeed = {};
TCPE.attackValue = {};
TCPE.materialAbility = {};
TCPE.texture = {};
TCPE.item = {};
TCPE.tile = {};

TCPE.defaultDestroyTime = {};
TCPE.defaultDestroyTime.stone = 1.5;
TCPE.defaultDestroyTime.cobblestone = 1.75;
TCPE.defaultDestroyTime.goldOre = 3.25;
TCPE.defaultDestroyTime.ironOre = 3.25;
TCPE.defaultDestroyTime.coalOre = 3.0;





//Durability
TCPE.durability.wood = 59;
TCPE.durability.stone = 131;
TCPE.durability.iron = 250;
TCPE.durability.flint = 171;
TCPE.durability.cactus = 150;
TCPE.durability.bone = 200;
TCPE.durability.obsidian = 89;
TCPE.durability.alumite = 550;
TCPE.durability.netherrack = 131;
TCPE.durability.blueSlime = 1200;
TCPE.durability.greenSlime = 500;
TCPE.durability.paper = 30;
TCPE.durability.cobalt = 800;
TCPE.durability.ardite = 600;
TCPE.durability.manyullyn = 1200;
TCPE.durability.copper = 180;
TCPE.durability.bronze = 350;
TCPE.durability.steel = 750;
TCPE.durability.thaumium = 400;
TCPE.durability.pigIron = 250;

//Handle Modifier
TCPE.handleModifier.wood = 1;
TCPE.handleModifier.stone = .5;
TCPE.handleModifier.iron = 1.3;
TCPE.handleModifier.flint = 0.7;
TCPE.handleModifier.cactus = 1;
TCPE.handleModifier.bone = 1;
TCPE.handleModifier.obsidian = 0.8;
TCPE.handleModifier.alumite = 1.3;
TCPE.handleModifier.netherrack = 1.2;
TCPE.handleModifier.blueSlime = 2;
TCPE.handleModifier.greenSlime = 1.5;
TCPE.handleModifier.paper = 0.3;
TCPE.handleModifier.cobalt = 1.75;
TCPE.handleModifier.ardite = 2;
TCPE.handleModifier.manyullyn = 2.5;
TCPE.handleModifier.copper = 1.15;
TCPE.handleModifier.bronze = 1.3;
TCPE.handleModifier.steel = 1.3;
TCPE.handleModifier.thaumium = 1.3;
TCPE.handleModifier.pigIron = 1.3;

//Mining Level
TCPE.miningLevel.wood = 0;
TCPE.miningLevel.stone = 1;
TCPE.miningLevel.iron = 2;
TCPE.miningLevel.flint = 1;
TCPE.miningLevel.cactus = 1;
TCPE.miningLevel.bone = 1;
TCPE.miningLevel.obsidian = 3;
TCPE.miningLevel.alumite = 4;
TCPE.miningLevel.netherrack = 2;
TCPE.miningLevel.blueSlime = 1;
TCPE.miningLevel.greenSlime = 1;
TCPE.miningLevel.paper = 0;
TCPE.miningLevel.cobalt = 4;
TCPE.miningLevel.ardite = 4;
TCPE.miningLevel.manyullyn = 5;
TCPE.miningLevel.copper = 1;
TCPE.miningLevel.bronze = 2;
TCPE.miningLevel.steel = 4;
TCPE.miningLevel.thaumium = 3;
TCPE.miningLevel.pigIron = 3;

//Mining Speed
TCPE.miningSpeed.wood = 2;
TCPE.miningSpeed.stone = 4;
TCPE.miningSpeed.iron = 6;
TCPE.miningSpeed.flint = 5.25;
TCPE.miningSpeed.cactus = 5;
TCPE.miningSpeed.bone = 4;
TCPE.miningSpeed.obsidian = 7;
TCPE.miningSpeed.alumite = 8;
TCPE.miningSpeed.netherrack = 4;
TCPE.miningSpeed.blueSlime = 1.5;
TCPE.miningSpeed.greenSlime = 1.5;
TCPE.miningSpeed.paper = 2;
TCPE.miningSpeed.cobalt = 11;
TCPE.miningSpeed.ardite = 8;
TCPE.miningSpeed.manyullyn = 9;
TCPE.miningSpeed.copper = 5;
TCPE.miningSpeed.bronze = 7;
TCPE.miningSpeed.steel = 8;
TCPE.miningSpeed.thaumium = 7;
TCPE.miningSpeed.pigIron = 6;

//AttackValue
TCPE.attackValue.wood = 0;
TCPE.attackValue.stone = 0.5;
TCPE.attackValue.iron = 1;
TCPE.attackValue.flint = 1;
TCPE.attackValue.cactus = 1;
TCPE.attackValue.bone = 0.5;
TCPE.attackValue.obsidian = 1;
TCPE.attackValue.alumite = 1.5;
TCPE.attackValue.netherrack = 0.5;
TCPE.attackValue.blueSlime = 0;
TCPE.attackValue.greenSlime = 0;
TCPE.attackValue.paper = 0;
TCPE.attackValue.cobalt = 1.5;
TCPE.attackValue.ardite = 1.5;
TCPE.attackValue.manyullyn = 2;
TCPE.attackValue.copper = 1;
TCPE.attackValue.bronze = 1;
TCPE.attackValue.steel = 1.5;
TCPE.attackValue.thaumium = 1;
TCPE.attackValue.pigIron = 1;

//Material Ability
TCPE.materialAbility.wood = "none";
TCPE.materialAbility.stone = "stoneboundOne";
TCPE.materialAbility.iron = "reinforcedOne";
TCPE.materialAbility.flint = "none";
TCPE.materialAbility.cactus = "jaggedOne";
TCPE.materialAbility.bone = "none";
TCPE.materialAbility.obsidian = "reinforcedThree";
TCPE.materialAbility.alumite = "reinforcedTwo";
TCPE.materialAbility.netherrack = "stoneboundOne";
TCPE.materialAbility.blueSlime = "slimy";
TCPE.materialAbility.greenSlime = "slimy";
TCPE.materialAbility.paper = "writeableOne";
TCPE.materialAbility.cobalt = "reinforcedTwo";
TCPE.materialAbility.ardite = "stoneboundTwo";
TCPE.materialAbility.manyullyn = "none";
TCPE.materialAbility.copper = "none";
TCPE.materialAbility.bronze = "reinforcedOne";
TCPE.materialAbility.steel = "reinforcedTwo";
TCPE.materialAbility.thaumium = "thaumicOne";
TCPE.materialAbility.pigIron = "reinforcedOne_tastyOne";

//Wood
TCPE.texture.wood = {};
TCPE.texture.wood.rod = "rod_wood";
TCPE.texture.wood.chunk = "chunk_wood";
TCPE.texture.wood.axeHead = "axehead_wood";
TCPE.texture.wood.pickaxeHead = "pickaxehead_wood";
TCPE.texture.wood.shovelHead = "shovelhead_wood";

TCPE.item.wood.pickaxeFull = "pickaxe_wood";
TCPE.item.wood.pickaxeBroken = "pickaxe_wood";

TCPE.item.wood.axeFull = "axe_wood";
TCPE.item.wood.axeBroken = "axe_wood";

//Wood
TCPE.item.wood = {};
TCPE.item.wood.rod = 500;
TCPE.item.wood.chunk = 501;
TCPE.item.wood.axeHead = 502;
TCPE.item.wood.pickaxeHead = 503;
TCPE.item.wood.shovelHead = 504;

TCPE.item.wood.pickaxeFull = 3500;
TCPE.item.wood.pickaxeBroken = 3501;

TCPE.item.wood.axeFull = 3550;
TCPE.item.wood.axeBroken = 3551;

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

TCPE.setInventorySlot = function(s,i,a,d){net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(s+9,i,a,d);};
TCPE.setItem = function(id,name,texture,textureData,maxStackSize){ModPE.setItem(id,texture,textureData,name,maxStackSize);}
TCPE.setTile = function(id,name,texture,material,isOpaque,render,lightLevel,lightOpacity,destroyTime,explosionResistance){Block.defineBlock(id,name,texture,material,isOpaque,render);Block.setLightLevel(id,lightLevel);Block.setLightOpacity(lightOpacity);Block.setDestroyTime(id,destroyTime);Block.setExplosionResistance(id,explosionResistance);}

TCPE.useOn = function(x,y,z,i,b,s,id,bd){
}
TCPE.destroyBlock = function(x,y,z,s){
}
TCPE.tick = function(){
}
TCPE.attackHook = function(a,v){
}

TCPE.setItem(TCPE.item.wood.rod,"Wooden Rod",TCPE.texture.wood.rod,0,64);
TCPE.setItem(TCPE.item.wood.chunk,"Wooden Chunk",TCPE.texture.wood.chunk,0,64);
TCPE.setItem(TCPE.item.wood.axeHead,"Wooden Axe Head",TCPE.texture.wood.axeHead,0,64);
TCPE.setItem(TCPE.item.wood.pickaxeHead,"Wooden Pickaxe Head",TCPE.texture.wood.pickaxeHead,0,64);
TCPE.setItem(TCPE.item.wood.shovelHead,"Wooden Shovel Head",TCPE.texture.wood.shovelHead,0,64);

TCPE.setItem(TCPE.item.wood.pickaxeFull,"Wooden Pickaxe",TCPE.texture.wood.pickaxeFull,0,1);
Item.setMaxDamage(TCPE.item.wood.pickaxeFull,TCPE.durability.wood*TCPE.handleModifier.wood);
TCPE.setItem(TCPE.item.wood.pickaxeBroken,"Wooden Pickaxe (Broken)",TCPE.texture.wood.pickaxeBroken,0,1);

TCPE.setItem(TCPE.item.wood.axeFull,"Wooden Axe",TCPE.texture.wood.axeFull,0,1);
Item.setMaxDamage(TCPE.item.wood.axeFull,TCPE.durability.wood*TCPE.handleModifier.wood);
TCPE.setItem(TCPE.item.wood.axeBroken,"Wooden Axe (Broken)",TCPE.texture.wood.axeBroken,0,1);

TCPE.setTile(TCPE.tile.searedBrick,"Seared Brick",["searedbrick",0],1,0,0,0,0,2,1);

//ModPE Hooks
function useItem(x,y,z,i,b,s,id,bd){TCPE.useOn(x,y,z,i,b,s,id,bd);}
function modTick(){TCPE.tick();}
function attackHook(a,v){TCPE.attackHook(a,v);}
function destroyBlock(x,y,z,s){TCPE.destroyBlock(x,y,z,s);};
//custom functions used instead
