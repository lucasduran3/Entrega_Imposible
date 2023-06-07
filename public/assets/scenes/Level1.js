export default class Level1 extends Phaser.Scene{
    constructor(){
        super("Level1");
    }

    init(){}
    preload(){
        this.load.tilemapTiledJSON("map1", "./public/assets/tilemaps/level1.json");
        this.load.image("street", "./public/assets/images/street.jpg");
        this.load.image("ground", "./public/assets/images/ground.jpg");
    }
    create(){
        const map1 = this.make.tilemap({key:"map1"});
        const streetLayer = map1.addTilesetImage("street", "street");
        const groundLayer = map1.addTilesetImage("ground", "ground");
        const ground = map1.createLayer("ground", groundLayer,0,0);
        const street = map1.createLayer("street", streetLayer,0,0);
        
    }

    update(){}

}