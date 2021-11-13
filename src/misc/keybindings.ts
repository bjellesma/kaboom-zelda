import { loadPlayer } from "../actors/player";
import { MOVESPEED } from "./speeds";
import { spawnKaboom } from "../maps";

export function loadKeyBinds(player: object) {
  // player movement
  // change the direction vector so that the kaboom knows where to spawn
  onKeyDown("d", () => {
    player.move(MOVESPEED, 0);
    player.use(sprite("link-right"));
    player.dir = vec2(1, 0);
  });

  keyDown("a", () => {
    player.move(-MOVESPEED, 0);
    player.use(sprite("link-left"));
    player.dir = vec2(-1, 0);
  });

  keyDown("s", () => {
    player.move(0, MOVESPEED);
    player.use(sprite("link-down"));
    player.dir = vec2(0, 1);
  });

  keyDown("w", () => {
    player.move(0, -MOVESPEED);
    player.use(sprite("link-up"));
    player.dir = vec2(0, -1);
  });

  // spawn the kaboom when you click the spacebar
  keyPress("space", () => {
    // add the dir of the user so the kaboom appears a little out
    spawnKaboom(player.pos.add(player.dir.scale(48)));
  });
}
