export default class Level2 extends Phaser.Scene{
    constructor(){
        super("Level2");
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
    init(data){
        this.count = 650;
        this.timerAceleration = 5;
        this.nCoins = data.nCoins;
    }
    create(){
        this.newScore = 0;
        this.keyScene = "Level2";
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
            key: "walk4",
            frames:this.anims.generateFrameNumbers("person4",{start:0, end:3}),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: "walk5",
            frames:this.anims.generateFrameNumbers("person5",{start:0, end:3}),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: "walkDog",
            frames:this.anims.generateFrameNumbers("dog",{start: 0, end:3}),
            frameRate:4,
            repeat:-1
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

        this.map = this.make.tilemap({key : "map2"});

        //LOAD AND CREATE LAYER
        const streetL = this.map.addTilesetImage("street", "street");
        const groundL = this.map.addTilesetImage("ground", "ground");
        const ground2L = this.map.addTilesetImage("ground2", "ground2");

        const sideL = this.map.addTilesetImage("sidewalk", "sidewalk");
        const cornerL = this.map.addTilesetImage("corner", "corner");
        const treeL = this.map.addTilesetImage("tree", "tree");
        const tree2L = this.map.addTilesetImage("tree2", "tree2");
        const bushL = this.map.addTilesetImage("bush", "bush");
        const crossWalkL = this.map.addTilesetImage("crosswalk", "crosswalk");
        const fenceL = this.map.addTilesetImage("fence", "fence");
        const coneL = this.map.addTilesetImage("cone", "cone");
        //const holeL = this.map.addTilesetImage("hole", "hole");

        const streetLayer = this.map.createLayer("street", streetL,0,0);   
        const groundLayer = this.map.createLayer("ground", groundL,0,0);
        const groundLayer2 = this.map.createLayer("ground2", ground2L,0,0);
        const sideWalkLayer = this.map.createLayer("sidewalk", sideL,0,0);
        const cornerLayer = this.map.createLayer("corner", cornerL,0,0);  
        const crosswalkLayer = this.map.createLayer("crosswalk", crossWalkL,0,0); 
        const bushLayer = this.map.createLayer("bush", bushL,0,0);
        //const holeLayer = this.map.createLayer("hole", holeL,0,0);

        const treeLayer = this.map.createLayer("tree", treeL,0,0);
        const tree2Layer = this.map.createLayer("tree2", tree2L,0,0);

        const fenceLayer = this.map.createLayer("fence", fenceL,0,0);
        const coneLayer = this.map.createLayer("cone", coneL,0,0);
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
          this.player.setCollideWorldBounds(true).setCircle(40,0,47);
        
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "person"
        );
        this.person = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person");
        this.person.setCollideWorldBounds(true);
       
        this.tweens.add({
            targets: this.person,
            x: 2049,
            flipX: true,
            yoyo: true,
            duration: 5000,
            repeat: -1
        });
        
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "person2"
        );

        this.person2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person2").setFlipX(90);
        this.person2.setCollideWorldBounds(true);
            
        this.tweens.add({
            targets: this.person2,
            x: 1164,
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
            duration: 5000,
            repeat: -1
        });

        spawnPoint2 = this.map.findObject(
            "objects",
            (obj) => obj.name === "person4"
        );

        this.person4 = this.physics.add.sprite(spawnPoint2.x, spawnPoint2.y, "person4");
        this.person4.setCollideWorldBounds(true);

        this.tweens.add({
            targets: this.person4,
            x: 2035,
            flipX: true,
            yoyo: true,
            duration: 10000,
            repeat: -1
        });

        spawnPoint2 = this.map.findObject(
            "objects",
            (obj) => obj.name === "person5"
        );

        this.person5 = this.physics.add.sprite(spawnPoint2.x, spawnPoint2.y, "person5");
        this.person5.setCollideWorldBounds(true);

        this.tweens.add({
            targets: this.person5,
            x: 2035,
            flipX: true,
            yoyo: true,
            duration: 3000,
            repeat: -1
        });

        let spawnPoint3 = this.map.findObject(
            "objects",
            (obj) => obj.name === "dog"
        );

        this.dog = this.physics.add.sprite(spawnPoint3.x, spawnPoint3.y, "dog");
        this.dog.setCollideWorldBounds(true);

        spawnPoint3 = this.map.findObject(
            "objects",
            (obj) => obj.name === "dog2"
        );

        this.dog2 = this.physics.add.sprite(spawnPoint3.x, spawnPoint3.y, "dog");
        this.dog2.setCollideWorldBounds(true);
        
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car"
        );
        this.car = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car");

        this.tweens.add({
            targets: this.car,
            x: 4500,
            hold: 100,
            duration: 2000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car2"
        );
        this.car2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car5");

        this.tweens.add({
            targets: this.car2,
            x: 4500,
            hold: 100,
            duration: 3000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car3"
        );
        this.car3 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car6").setFlipX(90);

        this.tweens.add({
            targets: this.car3,
            x: 100,
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
            duration: 1500,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car5"
        );
        this.car5 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car");

        this.tweens.add({
            targets: this.car5,
            x: 4500,
            hold: 100,
            duration: 2400,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car6"
        );
        this.car6 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car5").setFlipX(90);

        this.tweens.add({
            targets: this.car6,
            x: 200,
            hold: 100,
            duration: 1300,
            loop: -1,
        });

        var c = 0;
        this.coins = this.physics.add.group();
        objectsLayer.objects.forEach((objData) => {
         const { x = 0, y = 0, name } = objData;
            switch (name) {
            case "coin": {

          const coin = this.coins.create(x, y, "coin").setScale(0.3).anims.play("spin", true);
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

        this.holes = this.physics.add.group();
        objectsLayer.objects.forEach((objData)=>{
           const {x = 0, y = 0, name} = objData;
           switch(name){
            case "hole" : {
                const hole = this.holes.create(x,y,"hole");
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
            this.person4,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.person5,
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
            this.car5,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car6,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.holes,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.dog,
            this.loseAttemp,
            null,
            this
        );
        this.physics.add.overlap(
            this.player,
            this.dog2,
            this.loseAttemp,
            null,
            this
        );

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

        this.physics.add.overlap(
            this.player,
            this.check,
            this.isWin,
            null, 
            this
        );

        this.physics.add.collider(
            this.player,
            this.holeLayer,
            this.loseAttemp,
            null, 
            this
        );

        
        groundLayer.setCollisionByProperty({ colision: true });
        this.physics.add.collider(groundLayer, this.player);   
        
        bushLayer.setCollisionByProperty({colision:true});
        this.physics.add.collider(bushLayer, this.player);

        fenceLayer.setCollisionByProperty({colision:true});
        this.physics.add.collider(fenceLayer, this.player)

        coneLayer.setCollisionByProperty({colision:true});
        this.physics.add.collider(coneLayer, this.player)
        
        //GUI
        this.add.image(1000,10,"rect").setScrollFactor(0);
        const pauseButton = this.add.image(70,1010, "pauseButton").setInteractive().setScale(0.8);
        pauseButton.on("pointerover", ()=>{
            this.game.canvas.style.cursor = "pointer"
        });

        pauseButton.on('pointerover', function () {
            this.setScale(1);
            //this.setTint(0xD0BF0f);
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
            this.scene.pause("Level2");
        });
        pauseButton.setScrollFactor(0);
        this.add.image(110,980,"keyEsc").setScrollFactor(0).setScale(0.8);

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

        this.attempts = 5;
        console.log(this.dog);
    }

    update(){
        this.person.anims.play("walk", true);
        this.person2.anims.play("walk2", true);
        this.person3.anims.play("walk3", true);
        this.person4.anims.play("walk4", true);
        this.person5.anims.play("walk5", true);
        this.check.anims.play("spinCheck", true);
        this.dog.anims.play("walkDog", true);
        this.dogFollows(this.dog, this.player,300);

        console.log(this.player.y);

        if(this.player.y < 2553){
        this.dogFollows(this.dog2, this.player,100);
        }

        if(this.dog2.y <=1686){
            this.dog2.setVelocity(0);
            this.dog.anims.stop();
        }
        
        if(this.dog.y <=5065){
            this.dog.setVelocity(0);
            this.dog.anims.stop();
        }
        if(this.timer===0){
        this.loseAttemp();
        }

        if(this.keyEsc.isDown){    
            this.scene.pause("Level2");
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
            this.scene.start("GameOver");
        }

    }

    collectCoin(player, coin){
        this.nCoins+=10;
        this.newScore+=10;
        this.scoreText.setText("Score: " + this.nCoins);
        coin.disableBody(true, true);
    }
    
    onSecond(){
        this.timer--;
        this.timerText.setText(this.timer);
    }

    loseAttemp(){
            this.attempts--;
            this.player.setPosition(this.spawnPointPlayer.x, this.spawnPointPlayer.y);
            this.dog.setPosition(1200, 6500);
            this.player.setAngle(0);
    }

    isWin(){
        this.scene.start("LevelWin",{
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
    drink.disableBody(true,true);
     this.count=1300;
     this.tweens.add({
        targets: this.player.anims,
        timeScale: { from: 0.5, to: 2 },
        ease: 'Sine.inOut',
        yoyo: true,
        repeat: 1,
        repeatDelay: 1000,
        hold: 1000,
        duraton: 4000
    });
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

    dogFollows(dog, player,vel){
        this.physics.moveToObject(dog, player, vel);
    }
}