export default class GameWin extends Phaser.Scene{
    constructor(){
        super("GameWin");
    }
    sceneBack;
    init(data){
        this.sceneBack = data.keySceneBack;
    }
    create(){
    this.add.image(960,540,"bgBlack").setScrollFactor(0);;
    this.add.image(1920/2,1080/2,"phoneGameWin").setScrollFactor(0);   
    this.add.image(950,550, "like");

    const homeButton = this.add.image(850,840, "homeButton").setInteractive().setScale(0.7);
    homeButton.on("pointerover", ()=>{
        this.game.canvas.style.cursor = "pointer"
    });

    homeButton.on('pointerover', function () {
        this.setScale(0.8);
    });

    homeButton.on('pointerout', function () {
        this.setScale(0.7);
    });

    homeButton.on("pointerout", ()=>{
        this.game.canvas.style.cursor = "default";
    });

    homeButton.on("pointerdown", ()=>{
        this.game.canvas.style.cursor = "default";
        this.scene.stop("Level4");
        this.scene.start("Menu");  
    });


    const retryButton = this.add.image(1050,840, "retryButton").setInteractive().setScale(0.7);
    retryButton.on("pointerover", ()=>{
        this.game.canvas.style.cursor = "pointer"
    });

    retryButton.on('pointerover', function () {
        this.setScale(0.8);
    });

    retryButton.on('pointerout', function () {
        this.setScale(0.7);
    });

    retryButton.on("pointerout", ()=>{
        this.game.canvas.style.cursor = "default";
    });

    retryButton.on("pointerdown", ()=>{
        this.game.canvas.style.cursor = "default";
        this.scene.stop("Level4");
        this.scene.start("Level1");
    });

    this.sound.stopAll();
    this.gameWinS = this.sound.add("levelWinS");
    this.gameWinS.play()
    }
}