var files = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productArray = [];
var container = document.getElementById('container');

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
  var rolls = [];
  var roll1;
  var roll2;
  console.log(event);
  // while (roll === roll1)
  //   imageIndex(0, productArray.length - 1));
  //
  // var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  // var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  // var imageNum = imageIndex(0, productArray.length - 1);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
}

function test (rolls) {
  var imgEl = document.createElement('img');
  imgEl.src = 'img/' + productArray[imageNum].path;
  container.appendChild(imgEl);
  // return image
}

// function rollNum(rolls) {
//   var count = 0
//   while (rolls.length < 3 )
//     rolls[count] = imageIndex(0, productArray.length - 1)
//     if (rolls[count] ===  )
// }

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

for (var i = 0; i < 20; i++) {
  productArray[i] = new Product(files[i], 'img/' + files[i] + '.jpg');
}

container.addEventListener('click', handleProductClick);
onload();
