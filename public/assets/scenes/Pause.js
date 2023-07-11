export default class Pause extends Phaser.Scene{
    constructor(){
        super("Pause");  
    }
    text;
    create(){
        this.text = this.add.text(900, 150, "Pause",{
            fontSize: "60px",
            fontStyle: "bold",
            fill: "#FFF"
            });
        this.cursors = this.input.keyboard.createCursorKeys();  
        this.keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);    

        this.add.image(1920/2,1080/2,"phonePause").setScrollFactor(0);
    }

    update(){
        if(this.keyEsc.isDown){   
            this.scene.resume("Level1");
            this.scene.stop("Pause");
        }
    }
}