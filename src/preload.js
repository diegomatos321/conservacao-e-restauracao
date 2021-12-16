import Phaser from "phaser"
import LoadingInterface from "./common/scripts/LoadingInterface";
import commonAtlas from "./common/atlas/common-textures.json"
import uiAtlas from "./common/atlas/ui-textures.json"
import DetectTouchScreen from "./common/scripts/DetectTouchScreen"
import CONSTANTS from "./GLOBAL_CONSTANTS.json"

export default class Preload extends Phaser.Scene {
  constructor() {
    super({key: CONSTANTS.PRELOAD});
  }

  preload = () => {
    new LoadingInterface(this)
    this.load.atlas("common-atlas", new URL("./common/atlas/common-textures.png", import.meta.url).pathname, commonAtlas);
    this.load.atlas("ui-atlas", new URL("./common/atlas/ui-textures.png", import.meta.url).pathname, uiAtlas);    

    window.localStorage.setItem("isTouch", DetectTouchScreen())
  }

  create = () => {
    this.scene.launch(CONSTANTS.GAME_MANAGER)

    this.scene.start(CONSTANTS.MAIN_MENU)
  }
}