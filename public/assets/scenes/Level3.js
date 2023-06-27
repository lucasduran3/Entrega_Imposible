export default class Level3 extends Phaser.Scene{
    constructor(){
        super("Level3");
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
    init(data){
        this.count = 650;
        this.timerAceleration = 5;
        this.nCoins = data.nCoins;
    }

    create(){
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
            frames:this.anims.generateFrameNumbers("person4",{start:0, end:1}),
            frameRate: 10,
            repeat: -1,
        });

        /*this.anims.create({
            key: "walk3",
            frames:this.anims.generateFrameNumbers("person3",{start:0, end:3}),
            frameRate: 4,
            repeat: -1,
        });

        this.anims.create({
            key: "walk4",
            frames:this.anims.generateFrameNumbers("person4",{start:0, end:1}),
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
        });*/

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
            key:"spineClock",
            frames:this.anims.generateFrameNumbers("clock",{start:0, end:5}),
            frameRate:10,
            repeat:-1
        });  
    
        this.anims.create({
            key:"spinCheck",
            frames:this.anims.generateFrameNumbers("check",{start:0, end:6}),
            frameRate:10,
            repeat:-1

        });

        this.map = this.make.tilemap({key : "map3"});

        //LOAD AND CREATE LAYER
        const streetL = this.map.addTilesetImage("street", "street");
        const sideL = this.map.addTilesetImage("sidewalk", "sidewalk");
        const cornerL = this.map.addTilesetImage("corner", "corner");
        const floorL = this.map.addTilesetImage("floor", "floor");
        const buildL = this.map.addTilesetImage("build","build");
        const build2L  = this.map.addTilesetImage("build2", "build2");
        const build3L = this.map.addTilesetImage("build3", "build3");
        const build4L = this.map.addTilesetImage("build4","build4");
        const build5L = this.map.addTilesetImage("build5","build5");
        const build6L = this.map.addTilesetImage("build6","build6");

        
        const streetLayer = this.map.createLayer("street", streetL,0,0);   
        const floorLayer = this.map.createLayer("floor", floorL,0,0);
        const sideWalkLayer = this.map.createLayer("sidewalk", sideL,0,0);      
        const cornerLayer = this.map.createLayer("corner", cornerL,0,0);       
        const buildLayer = this.map.createLayer("build", buildL,0,0);
        const buildLayer2 = this.map.createLayer("build2", build2L,0,0);
        const buildLayer3 = this.map.createLayer("build3", build3L,0,0);
        const buildLayer5 = this.map.createLayer("build5", build5L,0,0);     
        const buildLayer6 = this.map.createLayer("build6", build6L,0,0);
        const buildLayer4 = this.map.createLayer("build4", build4L,0,0);


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
          this.player.setCollideWorldBounds(true);
        
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

        this.person2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person4");
        this.person2.setCollideWorldBounds(true);
            
        this.tweens.add({
            targets: this.person2,
            x: 2040,
            flipX: true,
            yoyo: true,
            duration: 5000,
            repeat: -1
        });

        /*let spawnPoint2 = this.map.findObject(
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
        );*/
        
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car"
        );
        this.car = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car").setFlipX(90);

        this.tweens.add({
            targets: this.car,
            x: 0,
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
            x: 0,
            hold: 100,
            duration: 3000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car3"
        );
        this.car3 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car6");

        this.tweens.add({
            targets: this.car3,
            x: 4500,
            hold: 100,
            duration: 2000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car4"
        );
        this.car4 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car2").setFlipX(90);

        this.tweens.add({
            targets: this.car4,
            x: 4500,
            hold: 100,
            duration: 1500,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car5"
        );
        this.car5 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car").setFlipX(90);

        this.tweens.add({
            targets: this.car5,
            x: 0,
            hold: 100,
            duration: 1200,
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

         spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car7"
        );
        this.car7 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car6");

        this.tweens.add({
            targets: this.car7,
            x: 4500,
            hold: 100,
            duration: 8000,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car8"
        );
        this.car8 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car").setFlipX(90);

        this.tweens.add({
            targets: this.car8,
            x: 200,
            hold: 100,
            duration: 1300,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car9"
        );

        /*this.car9 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car8");
        this.tweens.add({
            targets: this.car9,
            y: 8000,
            hold: 100,
            duration: 10000,
            loop: -1,
        });*/

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car10"
        );
        this.car10 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car5");

        this.tweens.add({
            targets: this.car10,
            x: 4500,
            hold: 100,
            duration: 1300,
            loop: -1,
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car11"
        );
        this.car11 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car");

        this.tweens.add({
            targets: this.car11,
            x: 4500,
            hold: 100,
            duration: 2000,
            loop: -1,
        });
        this.coins = this.physics.add.group();
        objectsLayer.objects.forEach((objData) => {
         const { x = 0, y = 0, name } = objData;
            switch (name) {
            case "coin": {

          const coin = this.coins.create(x, y, "coin").setScale(0.3).anims.play("spin", true);
          break;
        }
      }
    });

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
                const clock = this.clocks.create(x,y,"clock").anims.play("spineClock", true);
                break;
            }
           }
        });

          this.cursors = this.input.keyboard.createCursorKeys();  
          this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

          this.cameras.main.startFollow(this.player);
          this.physics.world.setBounds(0,0, this.map.widthInPixels, this.map.heightInPixels);
          this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

          this.time.addEvent({
            delay: 2500,
            callback: this.addCar,
            callbackScope: this,
            loop: true
          });
        

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
            this.car7,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car8,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car9,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car10,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.car11,
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

        floorLayer.setCollisionByProperty({colision:true});
        this.physics.add.collider(this.player, floorLayer);   
    
        this.scoreText = this.add.text(20, 20, "Score:" + this.nCoins, {
        fontSize: "32px",
        fontStyle: "bold",
        fill: "#FFF"
        });
        this.scoreText.setScrollFactor(0);

        this.timer = 60;
        this.timerText = this.add.text(950,20, this.timer,{
            fontSize:"32px",
            fontStyle: "bold",
            fill: "#FFF"
        });
        this.timerText.setScrollFactor(0);

        this.time.addEvent({
            delay: 1000,
            callback: this.onSecond,
            callbackScope: this,
            loop: true
        });

        this.attempts = 5;
        console.log(this.dog);

        //TUTORIAL
        
    }

    update(){
        this.person.anims.play("walk", true);
        this.person2.anims.play("walk2", true);
        /*this.person3.anims.play("walk3", true);
        this.person4.anims.play("walk4", true);
        this.person5.anims.play("walk5", true);*/
        this.check.anims.play("spinCheck", true);
        //this.exampleFunction();
        if(this.timer===0){
        this.loseAttemp();
        }
        //this.movePerson();
        if(this.keyP.isDown){   
            
            this.scene.pause("Level3");
            this.scene.launch("Pause");
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
            this.player.setAngle(0);
            this.timer = 60;
    }

    isWin(){
        this.scene.start("LevelWin3",{
            nCoins : this.nCoins,
            timer : this.timer,
            attempts : this.attempts
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

    dogFollows(dog, player){
        this.physics.moveToObject(dog, player, 300);
    }

    /*exampleFunction(){
        if(Phaser.Math.Distance.Between(this.car9.x, this.car9.y, this.car7.x, this.car7.y)<500){
            this.tween7.pause(0);
           console.log("Prueba");
        }else{
           // console.log("fjdsiof");
        }
    }*/

}