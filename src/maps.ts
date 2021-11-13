export function loadSprites() {
  // load root link for sprite
  loadRoot("https://i.imgur.com/");
  // load Sprite now has the specific link after the root
  loadSprite("link-left", "1Xq9biB.png");
  loadSprite("link-right", "yZIb8O2.png");
  loadSprite("link-down", "r377FIM.png");
  loadSprite("link-up", "UkV0we0.png");
  loadSprite("left-wall", "rfDoaa1.png");
  loadSprite("top-wall", "QA257Bj.png");
  loadSprite("bottom-wall", "vWJWmvb.png");
  loadSprite("right-wall", "SmHhgUn.png");
  loadSprite("bottom-left-wall", "awnTfNC.png");
  loadSprite("bottom-right-wall", "84oyTFy.png");
  // loadSprite("top-left-wall", "xlpUxIm.png");
  loadSprite("top-right-wall", "z0OmBd1.jpg");
  loadSprite("top-door", "U9nre4n.png");
  loadSprite("fire-pot", "I7xSp7w.png");
  loadSprite("left-door", "okdJNls.png");
  loadSprite("lanterns", "wiSiY09.png");
  loadSprite("slicer", "c6JFi5Z.png");
  loadSprite("skeletor", "Ei1VnX8.png");
  loadSprite("kaboom", "o9WizfI.png");
  loadSprite("stairs", "VghkL08.png");
  loadSprite("background", "u4DVsx6.png");
}

export function spawnKaboom(p) {
  // add the kaboom sprite to spawn where we are killing an enemy
  const obj = add([sprite("kaboom"), pos(p), area(), solid(), "kaboom"]);
  // destroy the kaboom sprite after 1 second
  wait(1, () => {
    destroy(obj);
  });
}

export const maps = [
  [
    "ycc)cc^ccw",
    "a        b",
    "a      * b",
    "a    (   b",
    "%        b",
    "a    (   b",
    "a   *    b",
    "a        b",
    "xdd)dd)ddz",
  ],
  [
    "yccccccccw",
    "a        b",
    ")        )",
    "a        b", //   TODO not running
    "a        b",
    "a    $   b",
    ")   }    )",
    "a        b",
    "xddddddddz",
  ],
];

//levelConfig is an object defining how the sprites are mapped
export const levelConfig = {
  width: 48,
  height: 48,
  a: () => [sprite("left-wall"), area(), solid(), "wall"],
  b: () => [sprite("right-wall"), area(), solid(), "wall"],
  c: () => [sprite("top-wall"), area(), solid(), "wall"],
  d: () => [sprite("bottom-wall"), area(), solid(), "wall"],
  w: () => [sprite("top-right-wall"), area(), solid(), "wall"],
  x: () => [sprite("bottom-left-wall"), area(), solid(), "wall"],
  y: () => [sprite("top-right-wall"), area(), solid(), "wall"],
  z: () => [sprite("bottom-right-wall"), area(), solid(), "wall"],
  "%": () => [sprite("left-door"), area(), solid(), "door"],
  "^": () => [sprite("top-door"), area(), solid(), "next-level"],
  $: () => [sprite("stairs"), area(), solid(), "next-level"],
  // passing object with dir attribute so that we can later manipulate this
  // TODO all objects with tag dangerous must have dir and moving. Can this be an interface
  "*": () => [
    sprite("slicer"),
    area(),
    solid(),
    "slicer",
    { moving: 1, dir: -1 },
    "dangerous",
  ],
  "}": () => [
    sprite("skeletor"),
    area(),
    solid(),
    "dangerous",
    "skeletor",
    { moving: 1, dir: -1, timer: 0 },
  ],
  ")": () => [sprite("lanterns"), area(), solid()],
  "(": () => [sprite("fire-pot"), area(), solid()],
};
