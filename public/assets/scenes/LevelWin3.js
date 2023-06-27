export default class LevelWin3 extends Phaser.Scene{
    constructor(){
        super("LevelWin3");
    }
    nCoins;
    timer;
    attempts;
    text;
    init(data){
        this.nCoins = data.nCoins;
        this.timer = data.timer;
        this.attempts = data.attempts;
    }

    create(){
        const contButton = this.add.image(950,540, "contButton").setInteractive().setScale(0.7);
        contButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });
    
        contButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });
    
        contButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";
            this.scene.start("Level4",{
                nCoins : this.nCoins,
            });
        });

        this.text = this.add.text(200,150,"Score:" + this.nCoins + " Tiempo:" + this.timer + " Intentos:" + this.attempts,{
            fontSize: "40px",
            fontStyle: "bold",
            fill: "#FFF"
        });
    }
}