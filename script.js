function tossCoin() {
  var coin = document.querySelector('.coin');
  var rotation = Math.random() < 0.5 ? 'rotateX(180deg)' : 'rotateY(180deg)';
  coin.style.transform = rotation;
  
  setTimeout(function() {
    var result = rotation === 'rotateX(180deg)' ? 'Heads' : 'Tails';
    alert('Coin landed on: ' + result);
    coin.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }, 500);
}