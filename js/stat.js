'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - 7 * GAP - TEXT_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.fillText('Ура, вы победили!', this.CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 5 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + 2.3 * GAP + FONT_GAP + (barHeight - TEXT_WIDTH - GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + 4 * GAP + (barHeight - TEXT_WIDTH - GAP) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_WIDTH - (barHeight * times[i]) / maxTime);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(240, 100%, 50%,' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + 4 * GAP + (barHeight - TEXT_WIDTH - GAP) * i, CLOUD_Y + CLOUD_HEIGHT + GAP - TEXT_WIDTH, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
  }
};
