export default class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    create(){
        this.sky = this.physics.add.sprite(0,0,"sky").setScale(10000);
        this.back = this.physics.add.sprite(1080,650,"back");
        this.car = this.physics.add.sprite(700,920,"carMenu").setAngle(-10);
        this.char = this.physics.add.sprite(1300,820,"char").setFlipX(90);

        this.bar = this.physics.add.sprite(1800,675,"bar");
        this.bar = this.physics.add.sprite(1800,475,"bar");
        //this.help = this.physics.add.sprite(1800,875,"help");

        this.title = this.physics.add.sprite(1095,150,"title").setScale(1.5);

        const playButton = this.add.image(1800,575, "play").setInteractive();
        playButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        playButton.on('pointerover', function () {
            this.setAngle(-4);
            this.setScale(1.105);
            this.setTint(0xD0BF0f);
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

        const helpButton = this.add.image(1800,875, "help").setInteractive();
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

    }
}