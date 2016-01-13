/*This mod has been ported by MCElectricGamer.

var TCPE = {
     Ids: {
          Items: {
               Wood: {
                    ToolRod: 500,
                    ToolBinding: 501,
                    AxeHead: 502,
                    PickaxeHead: 503,
                    Axe: {
                         Regular: 504,
                         RBroken: 505
                    },
                    Pickaxe: {
                         Regular: 506,
                         RBroken: 507
                    }
               },
               Stone: {
                    ToolRod: 600,
                    ToolBinding: 601,
                    AxeHead: 602,
                    PickaxeHead: 603,
                    Axe: {
                         Regular: 604,
                         RBroken: 605
                    },
                    Pickaxe: {
                         Regular: 606,
                         RBroken: 607
                    }
               }
          },
          Blocks: {
               Grout: 200,
               SearedBrick: 201
          }
     },
     Attributes: {
          Items: {
               Wood: {
                    Durability: 59,
                    MiningSpeed: 2,
                    AttackDamage: 2
               }
          },
          Blocks: {
               
          },
          Mobs: {
               
          }
     },
     createItem: function(id,name,texture,textureData,category,stacksize){
          ModPE.setItem(id,texture,textureData,name,stacksize);
          Item.setCategory(id,category);
          Player.addItemCreativeInv(id,1,0);
     },
     createToolItem: function(id,name,texture,textureData,durability){
          ModPE.setItem(id,texture,textureData,name,1);
          Item.setCategory(id,ItemCatergory.TOOL);
          Item.setMaxDamage(id,durability);
          Player.addItemCreativeInv(id,1,0);
     },
     createBrokenToolItem: function(id,name,texture,textureData){
          ModPE.setItem(id,texture,textureData,name,1);
          Item.setCategory(id,ItemCatergory.TOOL);
     },
     createBlock: function(id,name,texture,source,opacity,render,destroy,resistance){
          Block.defineBlock(id,name,texture,source,opacity,render);
          Block.setDestroyTime(id,destroy);
          Block.setExplosionResistance(id,resistance);
     },
     isToolItem: function(){
          var item = Player.getCarriedItem();
          if(item == TCPE.Ids.Items.Wood.Axe.Regular){
               return: "true";
          }
          else if(item == TCPE.Ids.Items.Wood.Pickaxe.Regular){
               return: "true";
          }
          else {
               return: "false";
          }
     },
     useOn: function(x,y,z,i,b,s,id,bd){
          
     },
     registerItems: function(){
          //Wooden Items
          TCPE.createItem(TCPE.Ids,Items.Wood.ToolRod,"Wooden Tool Rod","wood_rod",0,ItemCategory.TOOL,64);
          TCPE.createItem(TCPE.Ids,Items.Wood.ToolBinding,"Wooden Tool Binding","wood_binding",0,ItemCategory.TOOL,64);
          TCPE.createItem(TCPE.Ids,Items.Wood.AxeHead,"Wooden Axe Head","wood_axehead",0,ItemCategory.TOOL,64);
          TCPE.createItem(TCPE.Ids,Items.Wood.PickaxeHead,"Wooden Pickaxe Head","wood_pickaxehead",0,ItemCategory.TOOL,64);
          //Wooden Tools
          TCPE.createToolItem(TCPE.Ids,Items.Wood.Axe.Regular,"Wooden Axe","wood_axe",0,TCPE.Attributes.Items.Wood.Durability);
          TCPE.createBrokenToolItem(TCPE.Ids,Items.Wood.Axe.RBroken,"Wooden Axe (Broken)","wood_axe",1);
          
          TCPE.createToolItem(TCPE.Ids,Items.Wood.Pickaxe.Regular,"Wooden Pickaxe","wood_pickaxe",0,TCPE.Attributes.Items.Wood.Durability);
          TCPE.createBrokenToolItem(TCPE.Ids,Items.Wood.Pickaxe.RBroken,"Wooden Pickaxe (Broken)","wood_pickaxe",1);
          
          //Stone Items
          TCPE.createItem(TCPE.Ids,Items.Stone.ToolRod,"Stone Tool Rod","stone_rod",0,ItemCategory.TOOL,64);
          TCPE.createItem(TCPE.Ids,Items.Stone.ToolBinding,"Stone Tool Binding","stone_binding",0,ItemCategory.TOOL,64);
          TCPE.createItem(TCPE.Ids,Items.Stone.AxeHead,"Stone Axe Head","stone_axehead",0,ItemCategory.TOOL,64);
          TCPE.createItem(TCPE.Ids,Items.Stone.PickaxeHead,"Stone Pickaxe Head","stone_pickaxehead",0,ItemCategory.TOOL,64);
          //Stone Tools
          TCPE.createToolItem(TCPE.Ids,Items.Stone.Axe.Regular,"Stone Axe","stone_axe",0,TCPE.Attributes.Items.Stone.Durability);
          TCPE.createBrokenToolItem(TCPE.Ids,Items.Stone.Axe.RBroken,"Stone Axe (Broken)","stone_axe",1);
          
          TCPE.createToolItem(TCPE.Ids,Items.Stone.Pickaxe.Regular,"Stone Pickaxe","stone_pickaxe",0,TCPE.Attributes.Items.Stone.Durability);
          TCPE.createBrokenToolItem(TCPE.Ids,Items.Stone.Pickaxe.RBroken,"Stone Pickaxe (Broken)","stone_pickaxe",1);
     },
     registerBlocks: function(){
          TCPE.createBlock(TCPE.Ids.Blocks.Grout,"Grout",["grout_block",0],13,true,0,0.5,1);
          TCPE.createBlock(TCPE.Ids.Blocks.SearedBrick,"Seared Bricks",["seared_bricks",0],1,true,0,1.5,2);
     }
};

TCPE.registerItems();
TCPE.registerBlocks();

function useItem(x,y,z,i,b,s,id,bd){TCPE.useOn(x,y,z,i,b,s,id,bd);}
