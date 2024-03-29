export default class Level1 extends Phaser.Scene{
    constructor(){
        super("Level1");
    }
    map;
    keyA;
    nCoins;
    scoreText;
    timer;
    attempts;
    spawnPointPlayer;
    spawnPointCar;
    count;
    timedEvent;
    keyScene;
    newScore;
    init(){
    }

    create(){      
        this.keyScene = "Level1";
        this.count = 650;
        this.timerAceleration = 5;
        this.newScore = 0;
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        this.anims.create({
            key: "ride",
            frames: this.anims.generateFrameNumbers("player", { start: 1, end: 2 }),
            frameRate: 8,
            repeat: -1,
          });

        this.anims.create({
            key:"none",
            frames:[{key:"player",frame:0}],
            frameRate:20
        });

        this.anims.create({
            key: "walk",
            frames:this.anims.generateFrameNumbers("person",{start:0, end:3}),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "walk2",
            frames:this.anims.generateFrameNumbers("person2",{start:0, end:3}),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "walk3",
            frames:this.anims.generateFrameNumbers("person3",{start:0, end:3}),
            frameRate: 4,
            repeat: -1,
        });

        this.anims.create({
            key:"spin",
            frames: this.anims.generateFrameNumbers("coin",{start:0, end:8}),
            frameRate:13,
            repeat:-1
        });

        this.anims.create({
            key:"spinDrink",
            frames:this.anims.generateFrameNumbers("drink",{start:0, end:3}),
            frameRate:10,
            repeat:-1
        });

        this.anims.create({
            key:"spinCheck",
            frames:this.anims.generateFrameNumbers("check",{start:0, end:6}),
            frameRate:10,
            repeat:-1

        });

        this.map = this.make.tilemap({key : "map"});

        //LOAD AND CREATE LAYER
        const streetL = this.map.addTilesetImage("street", "street");
        const groundL = this.map.addTilesetImage("ground", "ground");
        const ground2L = this.map.addTilesetImage("ground2", "ground2");

        const sideL = this.map.addTilesetImage("sidewalk", "sidewalk");
        const dirtL = this.map.addTilesetImage("dirt", "dirt");
        const cornerL = this.map.addTilesetImage("corner", "corner");
        const treeL = this.map.addTilesetImage("tree", "tree");
        const tree2L = this.map.addTilesetImage("tree2", "tree2");
        const bushL = this.map.addTilesetImage("bush", "bush");

        const streetLayer = this.map.createLayer("street", streetL,0,0);   
        const dirtLayer = this.map.createLayer("dirt", dirtL,0,0);  
        const groundLayer = this.map.createLayer("ground", groundL,0,0);
        const groundLayer2 = this.map.createLayer("ground2", ground2L,0,0);
        const sideWalkLayer = this.map.createLayer("sidewalk", sideL,0,0);
        const cornerLayer = this.map.createLayer("corner", cornerL,0,0);   
        const bushLayer = this.map.createLayer("bush", bushL,0,0);
        

        this.house = this.physics.add.sprite(550,4300,"house");
        this.house2 = this.physics.add.sprite(2500,4150, "house2");
        this.house3 = this.physics.add.sprite(600,2300,"house3");
        this.house = this.physics.add.sprite(2600,2200,"house");
        this.house4 = this.physics.add.sprite(700,250, "house4");

        const treeLayer = this.map.createLayer("tree", treeL,0,0);
        const tree2Layer = this.map.createLayer("tree2", tree2L,0,0);
        //CREATE OBJECTS
        const objectsLayer = this.map.getObjectLayer("objects");

        let spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "check"
        );
        this.check = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "check").setScale(0.5);

        this.spawnPointPlayer = this.map.findObject(
            "objects",
            (obj) => obj.name === "player"
          );
          this.player = this.physics.add.sprite(this.spawnPointPlayer.x, this.spawnPointPlayer.y, "player");
          this.player.setCollideWorldBounds(true).setCircle(30,10,57);
        
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "person"
        );
        this.person = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person").setFlipX(90);
        this.person.setCollideWorldBounds(true);
       
        this.tweens.add({
            targets: this.person,
            x: 1165,
            flipX: true,
            yoyo: true,
            duration: 5000,
            repeat: -1
        });
        
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "person2"
        );

        this.person2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person2");
        this.person2.setCollideWorldBounds(true);
    
        this.tweens.add({
            targets: this.person2,
            x: 2035,
            flipX: true,
            yoyo: true,
            duration: 5000,
            repeat: -1
        });

        let spawnPoint2 = this.map.findObject(
            "objects",
            (obj) => obj.name === "person3"
        );

        this.person3 = this.physics.add.sprite(spawnPoint2.x, spawnPoint2.y, "person3").setFlipX(90);
        this.person3.setCollideWorldBounds(true);

        this.tweens.add({
            targets: this.person3,
            x: 1200,
            flipX: true,
            yoyo: true,
            duration: 1600,
            repeat: -1
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car"
        );
        this.car = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car").setFlipX(90);

        this.tweens.add({
            targets: this.car,
            x: 200,
            hold: 100,
            duration: 2000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car2"
        );
        this.car2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car5").setFlipX(90);

        this.tweens.add({
            targets: this.car2,
            x: 200,
            hold: 100,
            duration: 5000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car3"
        );
        this.car3 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car6");

        this.tweens.add({
            targets: this.car3,
            x: 3070,
            hold: 100,
            duration: 2000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car4"
        );
        this.car4 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car2");

        this.tweens.add({
            targets: this.car4,
            x: 200,
            hold: 100,
            duration: 2000,
            loop: -1,
        });

        var c = 0;
        this.coins = this.physics.add.group();
        objectsLayer.objects.forEach((objData) => {
         const { x = 0, y = 0, name } = objData;
            switch (name) {
            case "coin": {

          const coin = this.coins.create(x, y, "coin").setScale(0.3).anims.play("spin", true).setCircle(100,-20,-10);
          c++;
          break;
        }
      }
    });
    console.log(c);

        this.drinks = this.physics.add.group();
        objectsLayer.objects.forEach((objData)=>{
           const {x = 0, y = 0, name} = objData;
           switch(name){
            case "drink" : {
                const drink = this.drinks.create(x,y,"drink").anims.play("spinDrink", true);
                break;
            }
           }
        });

        this.clocks = this.physics.add.group();
        objectsLayer.objects.forEach((objData)=>{
           const {x = 0, y = 0, name} = objData;
           switch(name){
            case "clock" : {
                const clock = this.clocks.create(x,y,"clock").setScale(0.02);
                break;
            }
           }
        });

          this.cursors = this.input.keyboard.createCursorKeys();  
          this.keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

          this.cameras.main.startFollow(this.player);
          this.physics.world.setBounds(0,0, this.map.widthInPixels, this.map.heightInPixels);
          this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

          this.time.addEvent({
            delay: 2500,
            callback: this.addCar,
            callbackScope: this,
            loop: true
          });
          
        this.physics.add.collider(
            this.player,
            this.groundLayer
        );

        this.physics.add.overlap(
            this.player,
            this.coins,
            this.collectCoin,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.person,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.person2,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.person3,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car2,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car3,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car4,
            this.loseAttemp,
            null,
            this
        );

        

        this.physics.add.overlap(
            this.player,
            this.check,
            this.isWin,
            null, 
            this
        );

        
        groundLayer.setCollisionByProperty({ colision: true });
        this.physics.add.collider(groundLayer, this.player);   
        
        bushLayer.setCollisionByProperty({colision:true});
        this.physics.add.collider(bushLayer, this.player);
        
        //G.U.I
        this.add.image(1000,10,"rect").setScrollFactor(0);
        const pauseButton = this.add.image(70,1010, "pauseButton").setInteractive().setScale(0.8);
        pauseButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        pauseButton.on('pointerover', function () {
            this.setScale(1);
        });

        pauseButton.on('pointerout', function () {
            this.setScale(0.8);
            this.clearTint();     
        });

        pauseButton.on("pointerout", ()=>{
            this.game.canvas.style.cursor = "default";
        });

        pauseButton.on("pointerdown", ()=>{
            this.game.canvas.style.cursor = "default";    
            this.scene.launch("Pause",{
                keySceneBack : this.keyScene
            });
            this.scene.pause("Level1");
        });
        pauseButton.setScrollFactor(0);
        this.add.image(110,980,"keyEsc").setScrollFactor(0).setScale(0.8);

        this.nCoins = 0;
        this.scoreText = this.add.text(35, 10, "            " + this.nCoins, {
        fontSize: "40px",
        fontFamily: 'arcadeClassic',
        });
        this.scoreText.setScrollFactor(0);
        this.add.image(60,30,"coinGUI").setScrollFactor(0).setScale(0.3);

        this.timer = 60;
        this.timerText = this.add.text(900,10, this.timer,{
            fontSize:"45px",
            fontFamily: 'arcadeClassic',
        });
        this.timerText.setScrollFactor(0);

        this.attempts = 5;
        this.attemptsText = this.add.text(1800,10, this.attempts,{
            fontSize:"45px",
            fontFamily: 'arcadeClassic',
        });
        this.attemptsText.setScrollFactor(0);
        this.add.image(1750,30,"heart").setScrollFactor(0).setScale(1.5);

        this.time.addEvent({
            delay: 1000,
            callback: this.onSecond,
            callbackScope: this,
            loop: true
        });
   
        //TUTORIAL
        this.keyUp = this.physics.add.sprite(1500,700,"keyUp");
        this.keyUp.setScrollFactor(0);
        const keyUpTween = this.tweens.add({
            targets: this.keyUp,
            scale: 1.2,
            yoyo: true,
            duration: 500,
            repeat: -1
        });
        this.keyDown = this.physics.add.sprite(1500,700,"keyDown").setVisible(false);
        this.keyDown.setScrollFactor(0);
        const keyDownTween = this.tweens.add({
            targets: this.keyDown,
            scale: 1.2,
            yoyo: true,
            duration: 500,
            repeat: -1
        });
        this.keyRight = this.physics.add.sprite(1500,700,"keyRight").setVisible(false);
        this.keyRight.setScrollFactor(0);
        const keyRightTween = this.tweens.add({
            targets: this.keyRight,
            scale: 1.2,
            yoyo: true,
            duration: 500,
            repeat: -1
        });
        this.keyLeft = this.physics.add.sprite(1500,700,"keyLeft").setVisible(false);
        this.keyLeft.setScrollFactor(0);
        const keyLeftTween = this.tweens.add({
            targets: this.keyLeft,
            scale: 1.2,
            yoyo: true,
            duration: 500,
            repeat: -1
        });
        console.log(this.keyUp.visible);

        //AUDIO
        this.collectcoin = this.sound.add("collectcoin2");
        this.drinkS = this.sound.add("drinkS");
        this.clockS = this.sound.add("clockS");
        this.newAttempt = this.sound.add("newAttempt");
        this.looseAtemptS = this.sound.add("looseAttemptS");
        this.music = this.sound.add("music");
        this.music.play();
        this.music.setLoop(true);
        this.music.setVolume(0.5);
        this.collectcoin.setVolume(0.2);
        this.drinkS.setVolume(0.2);
        this.clockS.setVolume(0.2);
        
    }

    update(){
        this.person.anims.play("walk", true);
        this.person2.anims.play("walk2", true);
        this.person3.anims.play("walk3", true);
        this.check.anims.play("spinCheck", true);

        if(this.timer===0){
            this.loseAttemp();
            this.timer = 60;
            this.timerText.setText();
        }

        if(this.keyEsc.isDown){     
            this.scene.pause("Level1");
            this.scene.launch("Pause",{
                keySceneBack : this.keyScene
            });
        }

        if(this.cursors.up.isDown){
            this.player.setVelocityY(-this.count)
            this.player.setAngle(0);
            this.player.anims.play("ride", true);
            
        }
        else if(this.cursors.down.isDown){
            this.player.setVelocityY(this.count);
            this.player.setAngle(180);
            this.player.anims.play("ride", true);

        }
        else if(this.cursors.right.isDown){
            this.player.setAngle(90);
            this.player.setVelocityX(this.count); 
            this.player.anims.play("ride", true);   
             
        }
        else if(this.cursors.left.isDown){
            this.player.setAngle(-90);
            this.player.setVelocityX(-this.count);
            this.player.anims.play("ride", true);
        }else{
            this.player.anims.play("none", true);
            this.player.setVelocity(0);
        } 

        if(this.attempts <= 0){
            this.scene.pause("Level1");
            this.scene.launch("GameOver");
        }

        //TUTORIAL
        if(this.keyUp.visible && this.cursors.up.isDown){
            this.keyUp.destroy();
            this.keyDown.setVisible(true);
        } else if(this.keyDown.visible && this.cursors.down.isDown){
            this.keyDown.destroy();
            this.keyRight.setVisible(true);
        } else if(this.keyRight.visible && this.cursors.right.isDown){
            this.keyRight.destroy();
            this.keyLeft.setVisible(true);
        }else if(this.keyLeft.visible && this.cursors.left.isDown){
            this.keyLeft.destroy();
        }

        this.physics.add.overlap(
            this.player,
            this.drinks,
            this.playerAceleration,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.clocks,
            this.timeIncrement,
            null,
            this
        );

    }

    collectCoin(player, coin){
        this.nCoins+=10;
        this.newScore+=10;
        this.scoreText.setText("            " + this.nCoins);
        coin.disableBody(true, true);
        this.collectcoin.play();
    }
    
    onSecond(){
        this.timer--;
        this.timerText.setText(this.timer);
    }

    loseAttemp(){
        this.looseAtemptS.play();
        this.attempts--;
        this.attemptsText.setText(this.attempts);
        this.player.setPosition(this.spawnPointPlayer.x, this.spawnPointPlayer.y);
        this.player.setAngle(0);
    }

    isWin(){
        this.scene.pause("Level1");
        this.scene.launch("LevelWin",{
            nCoins : this.nCoins,
            timer : this.timer,
            newScore : this.newScore,
            keySceneBack : this.keyScene
        });
    }

    resetVelocity(){
        this.count=650;
    }

    playerAceleration(player,drink){
    this.drinkS.play();
    drink.disableBody(true,true);
     this.count=1300;
     this.timedEvent = this.time.addEvent({
        delay:5000,
        callback: this.resetVelocity,
        callbackScope: this,
        repeat: 1,
     });
    }

    timeIncrement(player, clock){
        this.timer+=5;
        clock.disableBody(true,true);
    }
}