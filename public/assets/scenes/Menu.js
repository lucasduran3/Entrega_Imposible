export default class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    create(){
    this.scene.start("Level1");
    const playButton = this.add.image(400,600, "playButton").setInteractive().setScale(0.7);
    playButton.on("pointerover", ()=>{
        this.game.canvas.style.cursor = "pointer"
    });

    playButton.on("pointerout", ()=>{
        this.game.canvas.style.cursor = "default";
    });

    playButton.on("pointerdown", ()=>{
        this.game.canvas.style.cursor = "default";
        this.scene.start("Level1");
    });

    const helpButton = this.add.image(300,800, "helpButton").setInteractive().setScale(0.4);
    helpButton.on("pointerover", ()=>{
        this.game.canvas.style.cursor = "pointer"
    });

    helpButton.on("pointerout", ()=>{
        this.game.canvas.style.cursor = "default";
    });

    helpButton.on("pointerdown", ()=>{
        this.game.canvas.style.cursor = "default";
        this.scene.start("Help");
    });
    }
}