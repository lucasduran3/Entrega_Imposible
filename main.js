import Level1 from "./public/assets/scenes/Level1.js";
import Preload from "./public/assets/scenes/Preload.js";
import Menu from "./public/assets/scenes/Menu.js";
import Help from "./public/assets/scenes/Help.js";
import GameOver from "./public/assets/scenes/GameOver.js";
import Pause from "./public/assets/scenes/Pause.js";
import LevelWin from "./public/assets/scenes/LevelWin.js";
import Level2 from "./public/assets/scenes/Level2.js";
import Level3 from "./public/assets/scenes/Level3.js";
import Level4 from "./public/assets/scenes/Level4.js";
import LevelWin2 from "./public/assets/scenes/LevelWin2.js";
import LevelWin3 from "./public/assets/scenes/LevelWin3.js";
import LevelWin4 from "./public/assets/scenes/LevelWin4.js";
import GameWin from "./public/assets/scenes/GameWin.js";

const config = {
  type: Phaser.AUTO,
  
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 1280,
      height: 720,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },
  physics: {
    default: "arcade",
    arcade:{
      gravity:{
        x:0,
        y:0
      },
      debug : false,
    }, 
    
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Preload,Menu,Level1,Level2,Level3,Level4,Help,GameWin,GameOver,Pause,LevelWin,LevelWin2,LevelWin3,LevelWin4]
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
