export default class Pause extends Phaser.Scene{
    constructor(){
        super("Pause");  
    }
    text;
    keySceneBack;
    keyScene;
    init(data){
        this.sceneBack = data.keySceneBack;
    }
    create(){
        this.keyScene = "Pause";
        this.text = this.add.text(900, 150, "Pause",{
            fontSize: "60px",
            fontStyle: "bold",
            fill: "#FFF"
            });
        this.cursors = this.input.keyboard.createCursorKeys();  
        this.keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);    

        this.add.image(1920/2,1080/2,"phonePause").setScrollFactor(0);

       // this.add.image(950,540,"playPause").setScrollFactor(0);

        const playButton = this.add.image(950,540, "playPause").setInteractive();
        playButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        playButton.on('pointerover', function () {
            this.setScale(1.105);
        });

        playButton.on('pointerout', function () {
            this.setScale(1);
            this.clearTint();     
        });

        playButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });

        playButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";    
            this.scene.resume(this.sceneBack);
            this.scene.stop("Pause");
        });

        this.add.image(950,840,"helpPause").setScrollFactor(0);

        const helpButton = this.add.image(950,840, "helpPause").setInteractive();
        helpButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        helpButton.on('pointerover', function () {
            this.setScale(1.105);
        });

        helpButton.on('pointerout', function () {
            this.setScale(1);
            this.clearTint();     
        });

        helpButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });

        helpButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";    
            this.scene.start("Help");
            this.scene.pause("Pause");
        });
    }

    update(){
        if(this.keyEsc.isDown){   
            //this.scene.resume("Level1");
            this.scene.resume(this.sceneBack);     
            this.scene.stop("Pause");   
        }
    }
}