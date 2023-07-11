export default class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    create(){
        this.sky = this.physics.add.sprite(0,0,"sky").setScale(10000);
        this.back = this.physics.add.sprite(700,680,"backMenu");
        this.car = this.physics.add.sprite(350,910,"carMenu").setAngle(-10);
        this.char = this.physics.add.sprite(1000,820,"charMenu").setFlipX(90);
        

        this.bar = this.physics.add.sprite(1700,675,"bar");
        this.bar = this.physics.add.sprite(1700,475,"bar");
        //this.help = this.physics.add.sprite(1800,875,"help");

        const playButton = this.add.image(1700,475, "button").setInteractive();
        playButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        playButton.on('pointerover', function () {
            this.setAngle(-2);
            this.setScale(1.105);
            //this.setTint(0xD0BF0f);
        });

        playButton.on('pointerout', function () {
            this.setAngle(0);
            this.setScale(1);
            this.clearTint();     
        });

        playButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });

        playButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";    
            this.scene.start("Level1");
        });

        const helpButton = this.add.image(1700,875, "helpButton").setInteractive();
        helpButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        helpButton.on('pointerover', function () {
            this.setAngle(-4);
            this.setScale(1.105);
            //this.setTint(0xD0BF0f);
        });

        helpButton.on('pointerout', function () {
            this.setAngle();
            this.setScale(1);
            this.clearTint();     
        });

        helpButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });

        helpButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";    
            this.scene.start("Help");
        });

        /*this.add.text(100, 100, 'Entrega Imposible', {
            fontFamily: 'backto1982',
            fontSize: 140,
            
        });*/

        this.logo = this.physics.add.sprite(700,100,"logo");
    }
}