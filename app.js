var files = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0;
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var container = document.getElementById('container');
var productArray = [];

var barGraph;
var nameChartData = [];
var clicksChartData = [];
var graphData = {
  labels: nameChartData,
  datasets: [
    {
      data: clicksChartData,
    } ]
};

function Product(productName) {
  this.productName = productName;
  this.path = 'img/' + productName + '.jpg';
  this.clicks = 0;
  this.displayed = 0;
  productArray.push(this);
};

function randIndex(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

function handleProductClick(event) {
  if (event.target.id !== 'container') {
    totalClicks += 1;
    for (var i = 0; i < productArray.length; i++) {
      if (event.target.alt === productArray[i].productName) {
        productArray[i].clicks += 1;
        var lsArray = JSON.stringify(productArray);
        localStorage.setItem('productData', lsArray);
      }
    }
    displayProducts();
  }
}

function handleButtonClick(event) {
  updateChartData();
  drawGraph();
}

function updateChartData() {
  for (var i = 0; i < productArray.length; i++) {
    nameChartData[i] = productArray[i].productName;
    clicksChartData[i] = productArray[i].clicks;
  }
}

function drawGraph() {
  var barCanvas = document.getElementById('graph').getContext('2d');
  barGraph = new Chart(barCanvas, {
    type: 'bar',
    data: graphData,
    options: {
      backgroundColor: 'black'
    }
  });
}

function displayProducts() {
  if (totalClicks >= 25) {
    document.getElementById('results').hidden = false;
    document.getElementById('graphBox').hidden = false;
  } else if (totalClicks < 25) {
    document.getElementById('results').hidden = true;
    document.getElementById('graphBox').hidden = true;
  }
  var leftIndex = randIndex(0, productArray.length);
  productArray[leftIndex].displayed += 1;
  left.src = productArray[leftIndex].path;
  left.alt = productArray[leftIndex].productName;

  var centerIndex = randIndex(0, productArray.length);
  while (centerIndex === leftIndex) {
    console.log('Duplicate found between center and left');
    centerIndex = randIndex(0, productArray.length);
  }
  productArray[centerIndex].displayed += 1;
  center.src = productArray[centerIndex].path;
  center.alt = productArray[centerIndex].productName;

  var rightIndex = randIndex(0, productArray.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randIndex(0, productArray.length);
  }
  productArray[rightIndex].displayed += 1;
  right.src = productArray[rightIndex].path;
  right.alt = productArray[rightIndex].productName;
  var lsArray = JSON.stringify(productArray);
  localStorage.setItem('productData', lsArray);

}

for (var i = 0; i < 20; i++) {
  productArray[i] = new Product(files[i]);
}

if (localStorage.getItem('productData') !== null) {
  var storageData = localStorage.getItem('productData');
  storageData = JSON.parse(storageData);
  for (var i = 0; i < storageData.length; i++) {
    productArray[i].clicks = storageData[i].clicks;
    productArray[i].displayed = storageData[i].displayed;
  }
}

container.addEventListener('click', handleProductClick);
document.getElementById('results').addEventListener('click', handleButtonClick);
displayProducts();
