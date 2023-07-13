export default class Help extends Phaser.Scene{
    constructor(){
        super("Help");
    }
    sceneBack;
    init(data){
        this.sceneBack = data.keySceneBack;
    }
    create(){
        this.add.image(320,700,"bar");

        const backButton = this.add.image(320,900, "backButton").setInteractive().setScale(0.7);
        backButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        backButton.on('pointerover', function () {
            this.setScale(0.8);
            //this.setTint(0xD0BF0f);
        });

        backButton.on('pointerout', function () {
            this.setScale(0.7);     
        });

        backButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });

        backButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";    
            this.scene.stop("Help");
            this.scene.start(this.sceneBack);          
        });

        this.add.image(1920/2,700,"bar");
        this.add.image(1920/2,400,"bar");
        this.add.image(1920/2,100,"bar");
        this.add.image(1920/2,900,"helpLetter3").setScale(0.7);
        this.add.image(1920/2,650,"helpLetter2").setScale(0.7);
        this.add.image(1920/2,350,"helpLetter1");
    }
}