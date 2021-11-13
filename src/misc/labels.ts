// add to ui layer to not interfere with game
export function loadScoreLabel(score: number) {
  return add([
    text(`score: 0`),
    pos(250, 450),
    layer("ui"),
    {
      value: score,
    },
  ]);
}
