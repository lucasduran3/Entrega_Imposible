export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.tilemapTiledJSON("map", "./public/assets/tilemaps/level1.json");
        this.load.image("ground", "./public/assets/images/ground.png");
        this.load.image("street", "./public/assets/images/street.png");
        this.load.image("player", "./public/assets/images/player.png");
        this.load.image("car", "./public/assets/images/car.png");
        this.load.image("person", "./public/assets/images/person.png");
        this.load.image("check", "./public/assets/images/check.png");
        this.load.image("coin", "./public/assets/images/coin.png");
        this.load.image("playButton", "./public/assets/images/playButton.png");
        this.load.image("helpButton", "./public/assets/images/helpButton.png");
        this.load.image("retryButton", "./public/assets/images/retryButton.png");
        this.load.image("contButton", "./public/assets/images/contButton.png");
        this.load.image("drink", "./public/assets/images/drink.png");
        this.load.image("clock", "./public/assets/images/clock.png");
        this.load.image("car2", "./public/assets/images/car2.png");
        this.load.image("sidewalk", "./public/assets/images/sidewalk.png");
        this.load.image("line", "./public/assets/images/line.png");
    }
    create(){
        this.scene.start("Menu");
    }
}