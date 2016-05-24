var files = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0;
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var productArray = [];
var container = document.getElementById('container');

function Product(productName, path) {
  this.productName = productName;
  this.path = 'img/' + path + '.jpg';
  this.clicks = 0;
  this.displayed = 0;
  productArray.push(this);
};

function randIndex(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

function handleProductClick(event) {
  console.log(event.target.id);
  if (event.target.id !== 'container') {
    if (totalClicks <= 25) {
      displayProducts();
      totalClicks += 1;
      // var imgID = event.target.id;
      var selected = document.getElementById(event.target.id);
      for (var i; i < productArray.length; i++) {
        if (selected.src === productArray[i].path) {
          productArray[i].clicks += 1;
        }
      }
    }
  }
}

function displayProducts() {
  var leftIndex = randIndex(0, productArray.length);
  productArray[leftIndex].displayed += 1;
  left.src = productArray[leftIndex].path;
  left.alt = productArray[leftIndex].name;

  var centerIndex = randIndex(0, productArray.length);
  while (centerIndex === leftIndex) {
    console.log('Duplicate found between center and left');
    centerIndex = randIndex(0, productArray.length);
  }
  productArray[centerIndex].displayed += 1;
  center.src = productArray[centerIndex].path;
  center.alt = productArray[centerIndex].name;


  var rightIndex = randIndex(0, productArray.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randIndex(0, productArray.length);
  }
  productArray[rightIndex].displayed += 1;
  right.src = productArray[rightIndex].path;
  right.alt = productArray[rightIndex].name;


}

for (var i = 0; i < 20; i++) {
  productArray[i] = new Product(files[i]);
}

container.addEventListener('click', handleProductClick);
displayProducts();
