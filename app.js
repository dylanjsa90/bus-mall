var files = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var totalClicks = 0;
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var barGraph; // Graph
var topGraph; // Graph
var nameChartData = []; // Graph
var clicksChartData = []; // Graph
var top5GraphData = [];
var graphData = {
  labels: nameChartData,
  datasets: [
    {
      data: clicksChartData,
    } ]
};
var graphTopData = {
  labels: nameChartData,
  datasets: [
    {
      data: top5GraphData
    } ]
};
var productArray = [];
var container = document.getElementById('container');

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
      }
    }
    displayProducts();
  }
}

function handleButtonClick(event) {
  updateChartData();
  drawGraph('graph');
}

function handleTopProductClick(event) {
  updateChartData();
  clicksChartData.sort(compareNumbers);
  console.log(clicksChartData);
  //var top5 = clicksChartData.slice(-5);
  drawTopProductGraph('top5graph');

}

function updateChartData() {
  for (var i = 0; i < productArray.length; i++) {
    nameChartData[i] = productArray[i].productName;
    clicksChartData[i] = productArray[i].clicks;
  }
  top5GraphData = clicksChartData;
  top5GraphData = top5GraphData.sort(compareNumbers).slice(-5);
}

function drawGraph(graphID) {
  var barCanvas = document.getElementById('graph').getContext('2d');
  barGraph = new Chart(barCanvas, {
    type: 'bar',
    data: graphData,
    options: {
      backgroundColor: 'black'
    }
  });
}
function drawTopProductGraph(graphID) {
  var barCanvas = document.getElementById('top5graph').getContext('2d');
  topGraph = new Chart(barCanvas, {
    type: 'bar',
    data: graphTopData,
    options: {
      backgroundColor: 'black'
    }
  });
}

function displayProducts() {
  if (totalClicks >= 25) {
    document.getElementById('results').hidden = false;
  } else if (totalClicks < 25) {
    document.getElementById('results').hidden = true;
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

}

function compareNumbers(a, b) {
  return a - b;
}

// function graphTopProducts() {
//   drawGraph
// }

for (var i = 0; i < 20; i++) {
  productArray[i] = new Product(files[i]);
}

container.addEventListener('click', handleProductClick);
document.getElementById('results').addEventListener('click', handleButtonClick);
document.getElementById('top5').addEventListener('click', handleTopProductClick);

displayProducts();
