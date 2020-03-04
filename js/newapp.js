'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('cookieStores');

function Store (name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hourlySales = [];

}

Store.prototype.getSalesPerHour = function(){
  var total = 0;
  for (var i = 0; i < hours.length; i++){
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    var atHourSales = Math.floor(randomCust * this.avgSale);
    this.hourlySales[i] = atHourSales;
    total = total + atHourSales;
  }
  this.hourlySales.push(total);
};

Store.prototype.render = function(){
  var storeRow = document.createElement('tr');
  parentElement.appendChild(storeRow);

  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  storeRow.appendChild(nameCell);

  for(var i = 0; i < this.hourlySales.length; i++) {
    var salesPerHour = document.createElement('td');
    salesPerHour.textContent = this.hourlySales[i];
    storeRow.appendChild(salesPerHour);
  }

};

var seattleStore = new Store('Seattle', 23, 65, 6.3);
var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
var dubaiStore = new Store('Dubai', 11, 38, 3.7);
var parisStore = new Store('Paris', 20, 38, 2.3);
var limaStore = new Store('Lima', 2, 16, 4.6);

var storeData = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

for(var i = 0; i < storeData.length; i++){
  storeData[i].getSalesPerHour();
  storeData[i].render();
}

var timeTotalRow = document.createElement('tr');
parentElement.appendChild(timeTotalRow);

var timeTotalData = document.createElement('td');
timeTotalData.textContent = 'Hourly Totals';
timeTotalRow.appendChild(timeTotalData);

for(var k = 0; k < hours.length + 1; k++){
  var timeTotalCell = document.createElement('td');
  var hourlyTotal = 0;
  for (var j = 0; j < storeData.length; j++){
    hourlyTotal = hourlyTotal + storeData[j].hourlySales[k];
  }
  timeTotalCell.textContent = hourlyTotal;
  timeTotalRow.appendChild(timeTotalCell);
}
