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

//Stone
TCPE.texture.stone = {};
TCPE.texture.stone.rod = "rod_stone";
TCPE.texture.stone.chunk = "chunk_stone";
TCPE.texture.stone.axeHead = "axehead_stone";
TCPE.texture.stone.pickaxeHead = "pickaxehead_stone";
TCPE.texture.stone.shovelHead = "shovelhead_stone";

TCPE.texture.stone.pickaxeFull = "pickaxe_stone";
TCPE.texture.stone.pickaxeBroken = "pickaxe_stone";

TCPE.texture.stone.axeFull = "axe_stone";
TCPE.texture.stone.axeBroken = "axe_stone";

//Wood Stone
TCPE.texture.woodStone = {};
TCPE.texture.woodStone.pickaxeFull = "pickaxe_woodStone";
TCPE.texture.woodSone.pickaxeBroken = "pickaxe_woodStone";

TCPE.texture.woodStone.axeFull = "axe_woodStone";
TCPE.texture.woodStone.axeBroken = "axe_woodStone";

//Stone Wood
TCPE.texture.stoneWood = {};
TCPE.texture.stoneWood.pickaxeFull = "pickaxe_stoneWood";
TCPE.texture.stoneWood.pickaxeBroken = "pickaxe_stoneWood";

TCPE.texture.stoneWood.axeFull = "axe_stoneWood";
TCPE.texture.stoneWood.axeBroken = "axe_stoneWood";

//Wood
TCPE.item.wood = {};
TCPE.item.wood.rod = 500;
TCPE.item.wood.chunk = 501;
TCPE.item.wood.axeHead = 502;
TCPE.item.wood.pickaxeHead = 503;
TCPE.item.wood.shovelHead = 504;

TCPE.item.wood.pickaxeFull = 1500;
TCPE.item.wood.pickaxeBroken = 1501;

TCPE.item.wood.axeFull = 1550;
TCPE.item.wood.axeBroken = 1551;

//Stone
TCPE.item.stone = {};
TCPE.item.stone.rod = 600;
TCPE.item.stone.chunk = 601;
TCPE.item.stone.axeHead = 602;
TCPE.item.stone.pickaxeHead = 603;
TCPE.item.stone.shovelHead = 604;

TCPE.item.stone.pickaxeFull = 2000;
TCPE.item.stone.pickaxeBroken = 2001;

TCPE.item.stone.axeFull = 2550;
TCPE.item.stone.axeBroken = 2551;

//Wood Stone
TCPE.item.woodStone = {};
TCPE.item.woodStone.pickaxeFull = 3000;
TCPE.item.woodStone.pickaxeBroken = 3001;

TCPE.item.woodStone.axeFull = 3050;
TCPE.item.woodStone.axeBroken = 3051;

//Stone Wood
TCPE.item.stoneWood = {};
TCPE.item.stoneWood.pickaxeFull = 3500;
TCPE.item.stoneWood.pickaxeBroken = 3501;

TCPE.item.stoneWood.axeFull = 3550;
TCPE.item.stoneWood.axeBroken = 3551;

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
  var b = Level.getTile(x,y,z);
  var bd = Level.getData(x,y,z);
  if(b == 1 && bd == 0 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,4,1,0);
  }
  if(b == 1 && bd == 1 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,1,1,1);
  }
  if(b == 1 && bd == 2 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,1,1,2);
  }
  if(b == 1 && bd == 3 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,1,1,3);
  }
  if(b == 1 && bd == 4 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,1,1,4);
  }
  if(b == 1 && bd == 5 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,1,1,5);
  }
  if(b == 1 && bd == 6 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,1,1,6);
  }
  if(b == 4 && bd == 0 && Player.getCarriedItem() == 3500){
    TCPE.setInventorySlot(Player.getSelectedSlotId(),3500,1,Player.getCarriedItemData()+1);
    Level.dropItem(x,y,z,0.5,4,1,0);
  }
}
TCPE.tick = function(){
  if(Player.getCarriedItem() == 3500){
    Block.setDestroyTime(1,.3);
    Block.setDestroyTime(4,.45);
    Block.setDestroyTime(14,.55);
    Block.setDestroyTime(15,.55);
    Block.setDestroyTime(16,.5);
  }
  else id(Player.getCarriedItem() != 3500){
    Block.setDestroyTime(1,TCPE.defaultDestroyTime.stone);
    Block.setDestroyTime(4,TCPE.defaultDestroyTime.cobblestone);
    Block.setDestroyTime(14,TCPE.defaultDestroyTime.goldOre);
    Block.setDestroyTime(15,TCPE.defaultDestroyTime.ironOre);
    Block.setDestroyTime(16,TCPE.defaultDestroyTime.coalOre);
  }
  if(Player.getCarriedItem() == 3500 && Player.getCarriedItemData() > 59){
    Level.playSoundEnt(Player.getEntity(),"random.break",1000,0);
    TCPE.setInventorySLot(Player.getSelectedSlotId(),3501,1,0);
  }
  if(Player.getCarriedItem() == 3550 && Player.getCarriedItemData() > 59){
    Level.playSoundEnt(Player.getEntity(),"random.break",1000,0);
    TCPE.setInventorySLot(Player.getSelectedSlotId(),3551,1,0);
  }
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

TCPE.setItem(TCPE.item.woodStone.pickaxeFull,"Wooden Pickaxe",TCPE.texture.woodStone.pickaxeFull,0,1);
Item.setMaxDamage(TCPE.item.woodStone.pickaxeFull,TCPE.durability.wood*TCPE.handleModifier.stone);
TCPE.setItem(TCPE.item.woodStone.pickaxeBroken,"Wooden Pickaxe (Broken)",TCPE.texture.woodStone.pickaxeBroken,0,1);

TCPE.setItem(TCPE.item.woodStone.axeFull,"Wooden Axe",TCPE.texture.woodStone.axeFull,0,1);
Item.setMaxDamage(TCPE.item.woodStone.axeFull,TCPE.durability.wood*TCPE.handleModifier.stone);
TCPE.setItem(TCPE.item.woodStone.axeBroken,"Wooden Axe (Broken)",TCPE.texture.woodStone.axeBroken,0,1);

TCPE.setItem(TCPE.item.stone.pickaxeFull,"Stone Pickaxe",TCPE.texture.stone.pickaxeFull,0,1);
Item.setMaxDamage(TCPE.item.stone.pickaxeFull,TCPE.durability.stone*TCPE.handleModifier.stone);
TCPE.setItem(TCPE.item.stone.pickaxeBroken,"Stone Pickaxe (Broken)",TCPE.texture.stone.pickaxeBroken,0,1);

TCPE.setItem(TCPE.item.stone.axeFull,"Stone Axe",TCPE.texture.stone.axeFull,0,1);
Item.setMaxDamage(TCPE.item.stone.axeFull,TCPE.durability.stone*TCPE.handleModifier.stone);
TCPE.setItem(TCPE.item.stone.axeBroken,"Stone Axe (Broken)",TCPE.texture.stone.axeBroken,0,1);

TCPE.setItem(TCPE.item.stoneWood.pickaxeFull,"Stone Pickaxe",TCPE.texture.stoneWood.pickaxeFull,0,1);
Item.setMaxDamage(TCPE.item.stoneWood.pickaxeFull,TCPE.durability.stone*TCPE.handleModifier.wood);
TCPE.setItem(TCPE.item.stoneWood.pickaxeBroken,"Stone Pickaxe (Broken)",TCPE.texture.stoneWood.pickaxeBroken,0,1);

TCPE.setItem(TCPE.item.stoneWood.axeFull,"Stone Axe",TCPE.texture.stoneWood.axeFull,0,1);
Item.setMaxDamage(TCPE.item.stoneWood.axeFull,TCPE.durability.stone*TCPE.handleModifier.wood);
TCPE.setItem(TCPE.item.stoneWood.axeBroken,"Stone Axe (Broken)",TCPE.texture.stoneWood.axeBroken,0,1);


TCPE.setTile(TCPE.tile.searedBrick,"Seared Brick",["searedbrick",0],1,0,0,0,0,2,1);

//ModPE Hooks
function useItem(x,y,z,i,b,s,id,bd){TCPE.useOn(x,y,z,i,b,s,id,bd);}
function modTick(){TCPE.tick();}
function attackHook(a,v){TCPE.attackHook(a,v);}
function destroyBlock(x,y,z,s){TCPE.destroyBlock(x,y,z,s);};
//custom functions used instead
