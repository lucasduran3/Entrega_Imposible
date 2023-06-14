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
    init(){
        this.count = 260;
        this.timerAceleration = 5;
    }

    create(){
        console.log(this.time);
        this.map = this.make.tilemap({key : "map"});

        const streetL = this.map.addTilesetImage("street", "street");
        const groundL = this.map.addTilesetImage("ground", "ground");

        const streetLayer = this.map.createLayer("street", streetL,0,0);
        const groundLayer = this.map.createLayer("ground", groundL,0,0);

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
        this.person = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person").setScale(0.5).setFlipX(90);
        this.person.setCollideWorldBounds(true);
        this.tweens.add({
            targets: this.person,
            x: 300,
            flipX: true,
            yoyo: true,
            duration: 8000,
            repeat: -1
        });
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "person2"
        );
        this.person2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person").setScale(0.5).setFlipX(90);
        this.person2.setCollideWorldBounds(true);
        this.tweens.add({
            targets: this.person2,
            x: 2300,
            flipX: true,
            yoyo: true,
            duration: 8000,
            repeat: -1
        });
        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "person3"
        );
        this.person3 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "person").setScale(0.5).setFlipX(90);
        this.person3.setCollideWorldBounds(true);
        this.tweens.add({
            targets: this.person3,
            x: 1800,
            flipX: true,
            yoyo: true,
            duration: 8000,
            repeat: -1
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car"
        );
        this.car = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car");

        this.tweens.add({
            targets: this.car,
            x: 0,
            hold: 500,
            duration: 12000,
            loop: -1,
            ease: 'back.in'
        });

        spawnPoint = this.map.findObject(
            "objects",
            (obj) => obj.name === "car2"
        );
        this.car2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "car2");
        this.car2.setScale(0.2);

        this.tweens.add({
            targets: this.car2,
            x: 0,
            hold: 500,
            duration: 9000,
            loop: -1,
            ease: 'back.inout'
        });

       /* this.tweens.chain({
            tweens: [
                {
                    targets: this.car,
                    x: 0,
                    y: 200,
                    angle: 40,
                    duration: 1000,
                    ease: 'sine.out'
                },
                {
                    targets: this.car,
                    x: 0,
                    y: 700,
                    angle: 80,
                    duration: 1000,
                    ease: 'sine.in'
                },
                {
                    targets: this.car2,
                    x: 0,
                    y: 200,
                    angle: -30,
                    duration: 1000,
                    ease: 'sine.out'
                },
                {
                    targets: this.car2,
                    x: 0,
                    y: 700,
                    angle: -60,
                    duration: 1000,
                    ease: 'sine.in'
                },
            ],
            loop: -1
        });*/

        //Crear una variable como contador q dependiendo del valor cambie el sprite

        this.coins = this.physics.add.group();
        objectsLayer.objects.forEach((objData) => {
         const { x = 0, y = 0, name } = objData;
            switch (name) {
            case "coin": {

          const coin = this.coins.create(x, y, "coin").setScale(0.3);
          break;
        }
      }
    });

        this.drinks = this.physics.add.group();
        objectsLayer.objects.forEach((objData)=>{
           const {x = 0, y = 0, name} = objData;
           switch(name){
            case "drink" : {
                const drink = this.drinks.create(x,y,"drink").setScale(0.08);
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

        this.physics.add.collider(
            this.player,
            this.coins,
            this.collectCoin,
            null,
            this
        );

        this.physics.add.collider(
            this.player,
            this.person,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.collider(
            this.player,
            this.car,
            this.loseAttemp,
            null,
            this
        );

        this.physics.add.collider(
            this.player,
            this.drinks,
            this.playerAceleration,
            null,
            this
        );

        this.physics.add.collider(
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
        
        groundLayer.setCollisionByProperty({ colision: true });
        this.physics.add.collider(groundLayer, this.player);    
        
        this.nCoins = 0;
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

        this.attempts = 3;


    }

    update(){
        if(this.timer===0){
        this.loseAttemp();
        }

        //this.movePerson();
        if(this.keyP.isDown){   
            
            this.scene.pause("Level1");
            this.scene.launch("Pause");
        }

        if(this.cursors.up.isDown){
            this.player.setVelocityY(-this.count);
            this.player.setAngle(0);
        }
        else if(this.cursors.down.isDown){
            this.player.setVelocityY(this.count);
            this.player.setAngle(180);
        }
        else if(this.cursors.right.isDown){
            this.player.setAngle(90);
            this.player.setVelocityX(this.count);      
        }
        else if(this.cursors.left.isDown){
            this.player.setAngle(-90);
            this.player.setVelocityX(-this.count);
        }else{
            this.player.setVelocity(0);
        } 

        if(this.attempts <= 0){
            this.scene.start("GameOver");
        }

    }
    /*movePerson(){
        if(this.player.y <=1053){
           this.person.setVelocityX(-100);
        }
    }*/

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
        this.scene.start("LevelWin",{
            nCoins : this.nCoins,
            timer : this.timer,
            attempts : this.attempts
        });
    }

    resetVelocity(){
        this.count=260;
    }

    playerAceleration(player,drink){
    drink.disableBody(true,true);
     this.count=800;
     this.timedEvent = this.time.addEvent({
        delay:3000,
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