export default class Help extends Phaser.Scene{
    constructor(){
        super("Help");
    }
    back;
    create(){
        this.back = this.add.text(220, 800, "Back",{
            fontSize: "60px",
            fontStyle: "bold",
            fill: "#FFF"
            }).setInteractive()
            .on('pointerdown', () => (this.scene.start('Menu')));
    }
}