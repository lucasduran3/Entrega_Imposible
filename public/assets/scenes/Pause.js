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
        this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);    
    }

    update(){
        if(this.keyP.isDown){   
            this.scene.resume("Level1");
            this.scene.stop("Pause");
        }
    }
}