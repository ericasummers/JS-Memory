function Game() {
}

Game.prototype.buildBoard = function() {
  var pictures = [1,2,3,4,5,6,7,8];
  var playPictures = pictures.concat(pictures.slice(0));

  //Fischer-Yates Shuffle
  function shuffle(playPictures) {
  var currentIndex = playPictures.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle…
  while (currentIndex) {
    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
      temporaryValue = playPictures[currentIndex];
      playPictures[currentIndex] = playPictures[randomIndex];
      playPictures[randomIndex] = temporaryValue;
    }
    return playPictures;
  }

  shuffle(playPictures);

  var div = 1;
  for (var i = 0; i < playPictures.length; i++) {
      $("#" + div).append("<img src='img/" + playPictures[i] + ".jpg' width='250px' class='tile-picture' id='img" + playPictures[i] + "'>");
      div++;
  }
}



$(document).ready(function() {
  var game = new Game();
  var cards = 0;
  var cardIds = [];
  game.buildBoard();
  $("img").click(function() {
    $(this).css('opacity', '1.0');
    cards++;
    cardIds.push($(this).attr("id"));
  });
  setInterval(function() {
    if (cards % 2 === 0) {
      if (cardIds[0] === cardIds[1]) {
        $("#img" + cardIds[0]).hide();
        cardIds = [];
        cards = 0;
      } else {
        $(".tile-picture").css('opacity', '0.0');
        cardIds = [];
        cards = 0;
      }
    }
  }, 2500);



});
