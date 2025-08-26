function boughtBtn() {
  document.querySelector('.shopee').style.display = 'none';
  document.querySelector('.bought').style.display = 'flex';
}
function shopeeBtn() {
  document.querySelector('.shopee').style.display = 'flex';
  document.querySelector('.bought').style.display = 'none';
}
function buyShI() {
  if (user.coins >= 10) {
    user.coins -= 10;
    document.querySelector('.coin-count').innerHTML = user.coins;
    let item = document.querySelector('.shI');
    item.style.display = 'none';
    let boughtItem = item.cloneNode(true);
    document.querySelector('.bought').appendChild(boughtItem);
    boughtItem.style.display = 'flex';
  } else {
    alert('You do not have enough coins to buy this item.');
  }
}
function buyIcI() {
  if (user.coins >= 15) {
    user.coins -= 15;
    document.querySelector('.coin-count').innerHTML = user.coins;
    let item = document.querySelector('.IcI');
    item.style.display = 'none';
    let boughtItem = item.cloneNode(true);
    document.querySelector('.bought').appendChild(boughtItem);
    boughtItem.style.display = 'flex';
  } else {
    alert('You do not have enough coins to buy this item.');
  }
}
