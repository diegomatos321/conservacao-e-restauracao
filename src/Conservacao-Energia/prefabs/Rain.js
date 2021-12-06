import Phaser from "phaser"

export default class Rain extends Phaser.Geom.Line {
  constructor(target, scene, particle) {
    super(target.x - target.body.width / 2, 0, (target.x + target.body.width / 2), 0);
    this.scene = scene
    this.raindropParticles = scene.add.particles(particle)
    this.rainHitArea = this.createRainHitArea(this, scene);
    this.timerEvent = scene.time.addEvent({delay: 10000, loop: false})
  }

  static CreateEmitter(particles, source, scene) {
    particles.createEmitter({
      speedY: 300,
      gravityY: scene.game.config.physics.arcade.gravity.y,
      lifespan: 1000,
      quantity: 10,
      frequency: 20,
      rotate: -15,
      emitZone: {
        source: source,
        type: "random"
      },
    });
  }

  createRainHitArea = (rainSource, scene) => {
    let widthOfRainHitArea = Phaser.Geom.Line.Length(rainSource);
    let heightOfRainHitArea = scene.game.config.height - rainSource.y1;
    let rainHitArea = scene.add.rectangle(rainSource.x1 + widthOfRainHitArea / 2, rainSource.y1 + heightOfRainHitArea / 2, widthOfRainHitArea, heightOfRainHitArea);
    rainHitArea.setData("power", 0.1);
    return rainHitArea;
  }

  updateRain = () => {
    if(this.timerEvent.getProgress() == 1) {
      this.raindropParticles.destroy()
      this.rainHitArea.destroy()
      this.timerEvent.destroy()

      return false
    }

    return true
  }

}