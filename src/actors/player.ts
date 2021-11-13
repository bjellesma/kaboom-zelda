export function loadPlayer() {
  return add([
    sprite("link-right"),
    pos(50, 190),
    { dir: vec2(1, 0) },
    area(),
    solid(),
  ]);
}
