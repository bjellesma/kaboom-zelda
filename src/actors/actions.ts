import { maps } from "../maps";
import { SKELETORSPEED, SLICERSPEED } from "../misc/speeds";

export function loadPlayerActions(
  level: number,
  player: object,
  scoreLabel: object
) {
  player.onCollide("next-level", () => {
    console.log("go to next level");
    go("game", { level: (level + 1) % maps.length, score: scoreLabel.value });
  });
  player.onCollide("dangerous", () => {
    go("lose", { score: scoreLabel.value });
  });
}

export function loadEnemyActions(scoreLabel: object) {
  action("skeletor", (s) => {
    s.move(0, s.dir * SKELETORSPEED);
    s.timer -= dt();
    // Change the direction when the timer = 0
    if (s.timer <= 0) {
      s.dir = -s.dir;
      // assign new value to time
      s.timer = rand(5);
    }
  });
  // apply the direction so that it's pos/neg depending on the dir value
  action("slicer", (slicer) => {
    if (slicer.moving) {
      // set flag so that the collide method will fire when a wall is reached
      slicer.moving = 0;
    }
    slicer.move(slicer.dir * SLICERSPEED, 0);
  });
  // anything with tag dangerous will change direction is it collides with a wall
  onCollide("dangerous", "wall", (obj) => {
    if (!obj.moving) {
      // set moving to 1 so that the event doesn't fire again
      // until after it begins moving
      obj.moving = 1;
      obj.dir = -obj.dir;
    }
  });
  // when a kaboom collides with a skeletor, destroy the enemy and increment the score
  onCollide("kaboom", "skeletor", (k, s) => {
    shake(4);
    wait(1, () => {
      destroy(k);
    });
    destroy(s);
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  });
}
