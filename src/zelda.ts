import kaboom from "kaboom";
import { loadSprites, maps, levelConfig } from "./maps";
import { loadPlayer } from "./actors/player";
import { loadPlayerActions, loadEnemyActions } from "./actors/actions";
import { loadLoseScene } from "./scenes/lose";
import { loadKeyBinds } from "./misc/keybindings";
import { loadScoreLabel } from "./misc/labels";

kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  background: [0, 0, 0, 1],
});

// load the sprites
loadSprites();
// load scenes
loadLoseScene();

scene("game", ({ level, score }) => {
  // TODO need interface for player
  const player = loadPlayer();
  // TODO need interface for label
  const scoreLabel = loadScoreLabel(score);
  // load keybinds
  loadKeyBinds(player);

  //   layers are made so that they can't collide with each other
  // the second param is a default so that if something doesn't have a layer
  layers(["background", "object", "ui"], "object");
  //   maps define where we use the sprites

  addLevel(maps[level], levelConfig);

  // load Player action
  loadPlayerActions(level, player, scoreLabel);
  // load enemy actions
  loadEnemyActions(scoreLabel);

  // add background layer
  add([sprite("background"), layer("background")]);

  add([text("level " + parseInt(level + 1)), pos(250, 550)]);

  // area ensures the object has collisison
  //   player needs to be defined as solid to interact with other solid objects
});

// passing in the default params for the game scene
go("game", { level: 1, score: 0 });
