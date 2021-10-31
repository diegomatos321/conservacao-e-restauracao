import Phaser from "phaser"

export default class Mesa extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    scene.add.existing(this);
    scene.physics.add.existing(this, true);

    this.setSize(this.displayWidth, this.displayHeight/3, true);
  }
}