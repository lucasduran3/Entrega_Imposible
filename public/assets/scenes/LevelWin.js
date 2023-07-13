export default class LevelWin extends Phaser.Scene{
    constructor(){
        super("LevelWin");
    }
    nCoins;
    timer;
    attempts;
    text;
    scoreText;
    extraScore;
    firstScore;
    sceneBack;
    newScore;
    init(data){
        this.nCoins = data.nCoins;
        this.timer = data.timer;
        this.attempts = data.attempts;
        this.sceneBack = data.keySceneBack;
        this.newScore  = data.newScore;
    }
    
    create(){
        this.firstScore = this.nCoins;
        this.add.image(1920/2,1080/2,"phoneWin").setScrollFactor(0);
        if(this.newScore >= 450 && this.timer>20){
            this.add.image(820,450,"star").setScrollFactor(0);
            this.add.image(960,450,"star").setScrollFactor(0);
            this.add.image(1100,450,"star").setScrollFactor(0);
            this.extraScore = 100;
        } else if(this.newScore>=360){
            this.add.image(820,450,"star").setScrollFactor(0);
            this.add.image(960,450,"star").setScrollFactor(0);
            this.extraScore = 50;
        } else{
            this.add.image(960,450,"star").setScrollFactor(0);
            this.extraScore = 25;
        }

        this.nCoins += this.extraScore;
        this.scoreText = this.add.text(770, 600, "            " + this.firstScore + "  +  " + this.extraScore + "  =  " + this.nCoins,{
            fontSize: "40px",
            fontFamily: 'arcadeClassic',
            }).setScrollFactor(0);
            this.scoreText.setScrollFactor(0);
            this.add.image(770,620,"coinGUI").setScrollFactor(0).setScale(0.3);
       
        const playButton = this.add.image(950,850, "playPause").setInteractive();
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
            if(this.sceneBack == "Level1"){
                this.scene.start("Level2");
            }else if(this.sceneBack == "Level2"){
                this.scene.start("Level3");
            }else if(this.sceneBack == "Level3"){
                this.scene.start("Level4");
            } else if(this.sceneBack == "Level4"){
                this.scene.start("GameWin");
            }
        });
    }
}