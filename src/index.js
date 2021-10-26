import Phaser from "phaser"
import MenuScene from "./scenes/MenuScene.js"
import ConservacaoEnergiaScene from "./scenes/ConservacaoEnergiaScene.js"

let config = {
  title: "LADQUIM - Conservação e Restauração",
  version: "1.0.0",
  width: 1280,
  height: 768,
  parent: "game-container",
  type: Phaser.AUTO,
  backgroundColor: "#00b3ff",
  dom: {
    createContainer: true
  },
  scale: {
    width: 1280,
    height: 768,
    parent: "game-container",
    fullscreenTarget: "game-container",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  autoFocus: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1200 },
      debug: true
    }
  },
  banner: true,
  url: "https://ladquim.iq.ufrj.br/",
  scene: [MenuScene, ConservacaoEnergiaScene]
};

let game = new Phaser.Game(config);