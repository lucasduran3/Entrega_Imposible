export default class GameWin extends Phaser.Scene{
    constructor(){
        super("GameWin");
    }

    create(){
    const retryButton = this.add.image(950,540, "retryButton").setInteractive().setScale(0.7);
    retryButton.on("pointerover", ()=>{
        this.game.canvas.style.cursor = "pointer"
    });

    retryButton.on("pointerout", ()=>{
        this.game.canvas.style.cursor = "default";
    });

    retryButton.on("pointerdown", ()=>{
        this.game.canvas.style.cursor = "default";
        this.scene.start("Level1");
    });
    }
}