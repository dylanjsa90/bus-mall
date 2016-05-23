var productArray = [];
var container = document.getElementById('container');
var bag = new Product('bag', 'bag.jpg');
var banana = new Product('banana', 'banana.jpg');
var bathroom = new Product('bathroom', 'bathroom.jpg');
var boots = new Product('boots', 'boots.jpg');

function Product(name, path) {
  this.name = name;
  this.path = path;
  clicks = 0;
  displayed = 0;
  productArray.push(this);
};

function imageIndex(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function handleProductClick(event) {
  container.innerHTML = '';
  console.log(event);
  var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
}

function onload() {
  console.log(productArray);
  var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  // container.innerHTML = '';
}

container.addEventListener('click', handleProductClick);
onload();
