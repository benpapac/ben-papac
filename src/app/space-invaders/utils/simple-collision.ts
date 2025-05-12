

const closeEnough = (playerValue, enemyValue) => Math.abs(playerValue - enemyValue) < 0.5;

export const simpleCollision = (player, enemy) => {
console.log(player, enemy);
    return closeEnough(player.x, enemy.x) &&
    closeEnough(player.y, enemy.y);
}