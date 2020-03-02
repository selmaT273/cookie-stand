'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlySales: [],
  setCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  salesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(i);
      this.hourlySales[i] = Math.floor(this.setCust() * this.avgSale);
    }
  }



};

// seattle.setCust();
seattle.salesPerHour();


var cookieUlSeattle = document.getElementById('seattle');

var totalSeattle = 0;

for (var i = 0; i < seattle.hourlySales.length; i++){
  var cookieLiSeattle = document.createElement('li');
  cookieLiSeattle.textContent = hours[i] + ': ' + seattle.hourlySales[i];
  cookieUlSeattle.appendChild(cookieLiSeattle);
  totalSeattle += seattle.hourlySales[i];
//   console.log(seattle.hourlySales[i]);
}

var seattleTotal = document.createElement('li');
seattleTotal.textContent = 'Total: ' + totalSeattle;
cookieUlSeattle.appendChild(seattleTotal);

var tokyo = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlySales: [],
  setCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  salesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(i);
      this.hourlySales[i] = Math.floor(this.setCust() * this.avgSale);
    }
  }
};

tokyo.salesPerHour();


