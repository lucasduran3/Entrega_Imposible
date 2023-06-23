export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.tilemapTiledJSON("map", "./public/assets/tilemaps/level1.json");
        this.load.image("ground", "./public/assets/images/ground.png");
        this.load.image("street", "./public/assets/images/street.png");

        this.load.spritesheet("player", "./public/assets/images/player.png", {frameWidth: 192, frameHeight: 240});

        this.load.spritesheet("car", "./public/assets/images/car.png",{frameWidth: 400, frameHeight: 228});
        this.load.spritesheet("car5", "./public/assets/images/car5.png",{frameWidth: 400, frameHeight: 207});
        this.load.spritesheet("car6", "./public/assets/images/car6.png",{frameWidth: 400, frameHeight: 227});
        this.load.spritesheet("car2", "./public/assets/images/car2.png",{frameWidth: 400, frameHeight: 255});

        this.load.spritesheet("person", "./public/assets/images/person.png", {frameWidth:128, frameHeight:128});
        this.load.spritesheet("person2", "./public/assets/images/person2.png", {frameWidth:128, frameHeight:128});
        this.load.spritesheet("person3", "./public/assets/images/person3.png",{frameWidth:96, frameHeight:96});

        this.load.spritesheet("coin", "./public/assets/images/coin.png",{frameWidth:160, frameHeight:160});

        this.load.spritesheet("drink", "./public/assets/images/drink.png",{frameWidth:96, frameHeight:96});

        this.load.spritesheet("check", "./public/assets/images/check.png",{frameWidth:256, frameHeight:256});

        //this.load.image("check", "./public/assets/images/check.png");
        this.load.image("playButton", "./public/assets/images/playButton.png");
        this.load.image("helpButton", "./public/assets/images/helpButton.png");
        this.load.image("retryButton", "./public/assets/images/retryButton.png");
        this.load.image("contButton", "./public/assets/images/contButton.png");
        //this.load.image("clock", "./public/assets/images/clock.png");
        //this.load.image("car2", "./public/assets/images/car2.png");
        this.load.image("sidewalk", "./public/assets/images/sidewalk.png");
        this.load.image("corner", "./public/assets/images/corner.png");
        this.load.image("bush", "./public/assets/images/bush.png");
        this.load.image("tree", "./public/assets/images/tree.png");
        this.load.image("tree2", "./public/assets/images/tree2.png");
        this.load.image("flower", "./public/assets/images/flower.png");
        this.load.image("flower2", "./public/assets/images/flower2.png");
        this.load.image("dirt", "./public/assets/images/dirt.png");
        
    }
    create(){
        this.scene.start("Menu");
    }
}