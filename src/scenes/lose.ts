export function loadLoseScene() {
  scene("lose", ({ score }) => {
    add([text(score, 32), origin("center"), pos(width() / 2, height() / 2)]);
  });
}
