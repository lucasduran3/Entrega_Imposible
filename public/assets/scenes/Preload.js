export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.tilemapTiledJSON("map", "./public/assets/tilemaps/level1.json");
        this.load.tilemapTiledJSON("map2", "./public/assets/tilemaps/level2.json");
        this.load.tilemapTiledJSON("map3", "./public/assets/tilemaps/level3.json");
        this.load.tilemapTiledJSON("map4","./public/assets/tilemaps/level4.json");
        this.load.tilemapTiledJSON("mapMenu", "./public/assets/tilemaps/menu.json");

        this.load.image("ground", "./public/assets/images/ground.png");
        this.load.image("ground2", "./public/assets/images/ground2.png");
        this.load.image("street", "./public/assets/images/street.png");

        this.load.spritesheet("player", "./public/assets/images/player.png", {frameWidth: 192, frameHeight: 240});

        this.load.spritesheet("car", "./public/assets/images/car.png",{frameWidth: 400, frameHeight: 228});
        this.load.spritesheet("car5", "./public/assets/images/car5.png",{frameWidth: 400, frameHeight: 207});
        this.load.spritesheet("car6", "./public/assets/images/car6.png",{frameWidth: 400, frameHeight: 227});
        this.load.spritesheet("car2", "./public/assets/images/car2.png",{frameWidth: 400, frameHeight: 255});
        this.load.image("car7", "./public/assets/images/car7.png");
        this.load.image("car8", "./public/assets/images/car8.png");

        this.load.spritesheet("person", "./public/assets/images/person.png", {frameWidth:128, frameHeight:128});
        this.load.spritesheet("person2", "./public/assets/images/person2.png", {frameWidth:128, frameHeight:128});
        this.load.spritesheet("person3", "./public/assets/images/person3.png",{frameWidth:96, frameHeight:96});
        this.load.spritesheet("person4", "./public/assets/images/person5.png",{frameWidth:128, frameHeight:128});
        this.load.spritesheet("person5", "./public/assets/images/person4.png",{frameWidth:128, frameHeight:128});
        this.load.spritesheet("dog", "./public/assets/images/dog.png",{frameWidth:44, frameHeight:104});
        
        //POWER UPS
        this.load.spritesheet("coin", "./public/assets/images/coin.png",{frameWidth:160, frameHeight:160});
        this.load.spritesheet("drink", "./public/assets/images/drink.png",{frameWidth:96, frameHeight:96});
        this.load.spritesheet("clock", "./public/assets/images/clock.png",{frameWidth:96, frameHeight:96});
        this.load.spritesheet("check", "./public/assets/images/check.png",{frameWidth:256, frameHeight:256});

        this.load.image("playButton", "./public/assets/images/playButton.png");
        this.load.image("helpButton", "./public/assets/images/helpButton.png");
        this.load.image("retryButton", "./public/assets/images/retryButton.png");
        this.load.image("contButton", "./public/assets/images/contButton.png");
        this.load.image("sidewalk", "./public/assets/images/sidewalk.png");
        this.load.image("corner", "./public/assets/images/corner.png");
        this.load.image("crosswalk", "./public/assets/images/crosswalk.png");
        this.load.image("bush", "./public/assets/images/bush.png");
        this.load.image("tree", "./public/assets/images/tree.png");
        this.load.image("tree2", "./public/assets/images/tree2.png");
        this.load.image("flower", "./public/assets/images/flower.png");
        this.load.image("flower2", "./public/assets/images/flower2.png");
        this.load.image("dirt", "./public/assets/images/dirt.png");
        this.load.image("house", "./public/assets/images/house1.png");
        this.load.image("house2", "./public/assets/images/house2.png");
        this.load.image("house3", "./public/assets/images/house3.png");
        this.load.image("house4", "./public/assets/images/house4.png");
        this.load.image("cone", "./public/assets/images/cone.png");
        this.load.image("fence", "./public/assets/images/fence.png");
        this.load.image("hole", "./public/assets/images/hole.png");
        this.load.image("build", "./public/assets/images/build.png");
        this.load.image("build2", "./public/assets/images/build2.png");
        this.load.image("build3", "./public/assets/images/build3.png");
        this.load.image("build4", "./public/assets/images/build4.png");
        this.load.image("build5", "./public/assets/images/build5.png");
        this.load.image("build6", "./public/assets/images/build6.png");
        this.load.image("floor", "./public/assets/images/floor.png");
        this.load.image("trafficLight", "./public/assets/images/trafficLight.png");
        this.load.image("keyUp", "./public/assets/images/keyUp.png");
        this.load.image("keyDown", "./public/assets/images/keyDown.png");
        this.load.image("keyRight", "./public/assets/images/keyRight.png");
        this.load.image("keyLeft", "./public/assets/images/keyLeft.png");

        //ASSETS MENU
        this.load.image("play", "./public/assets/images/button.png");
        this.load.image("help", "./public/assets/images/helpButton.png");
        this.load.image("back", "./public/assets/images/backMenu.png");
        this.load.image("char", "./public/assets/images/charMenu.png");
        this.load.image("carMenu", "./public/assets/images/carMenu.png");
        this.load.image("sky", "./public/assets/images/sky.png");
        this.load.image("bar", "./public/assets/images/bar.png");
        this.load.image("title", "./public/assets/images/title.png");
        
    }
    create(){
        this.scene.start("Menu");
    }
}