export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){
        this.load.tilemapTiledJSON("map", "./public/assets/tilemaps/level1.json");
        this.load.image("ground", "./public/assets/images/ground.png");
        this.load.image("street", "./public/assets/images/street.png");
        this.load.image("player", "./public/assets/images/player.png");
    }
    create(){
        this.scene.start("Level1");
    }
}