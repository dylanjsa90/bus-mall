var files = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var productArray = [];
var container = document.getElementById('container');

function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.clicks = 0;
  this.displayed = 0;
  productArray.push(this);
};

Product.prototype.addClick = function() {
  this.clicks += 1;
};

Product.prototype.addDisplay = function() {
  this.displayed += 1;
};

function imageIndex(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function handleProductClick(event) {
  var rollIndex = [];
  container.innerHTML = '';
  rollIndex[0] = imageIndex(0, productArray.length - 1);
  console.log(event.target);
  var imgID = event.target;
  console.log(event);
  rollIndex[0] = imageIndex(0, productArray.length - 1);
  productArray[rollIndex[0]].addDisplay();
  appendImg(rollIndex[0]);
  var index = imageIndex(0, productArray.length - 1);
  var notRepeat = false;
  while (notRepeat !== true) {
    if (index !== rollIndex[0]) {
      notRepeat = true;
      rollIndex[1] = index;
      productArray[index].addDisplay();
      appendImg(index);
    } else {
      index = imageIndex(0, productArray.length - 1);
    }
  }
  notRepeat = false;
  index = imageIndex(0, productArray.length - 1);
  while (notRepeat !== true) {
    if (index !== rollIndex[0] && index !== rollIndex[1]) {
      notRepeat = true;
      rollIndex[2] = index;
      appendImg(index);
    } else {
      index = imageIndex(0, productArray.length - 1);
    }
  }
  productArray[event.target.id].addClick();
}

function appendImg(num) {
  var imgEl = document.createElement('img');
  imgEl.src = productArray[num].path;
  imgEl.setAttribute('id', num);
  container.appendChild(imgEl);
}

function onload() {
  console.log(productArray);
  var imageNum = imageIndex(0, productArray.length - 1);
  appendImg(imageNum);
  var imageNum = imageIndex(0, productArray.length - 1);
  appendImg(imageNum);
  var imageNum = imageIndex(0, productArray.length - 1);
  appendImg(imageNum);  // container.innerHTML = '';
}
for (var i = 0; i < 20; i++) {
  productArray[i] = new Product(files[i], 'img/' + files[i] + '.jpg');
}

container.addEventListener('click', handleProductClick);
onload();
