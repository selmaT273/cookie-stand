'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// SEATTLE!!!!!!!

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

seattle.salesPerHour();


var cookieUlSeattle = document.getElementById('seattle');

var totalSeattle = 0;

for (var i = 0; i < seattle.hourlySales.length; i++){
  var cookieLiSeattle = document.createElement('li');
  cookieLiSeattle.textContent = hours[i] + ': ' + seattle.hourlySales[i];
  cookieUlSeattle.appendChild(cookieLiSeattle);
  totalSeattle += seattle.hourlySales[i];
}

var seattleTotal = document.createElement('li');
seattleTotal.textContent = 'Total: ' + totalSeattle;
cookieUlSeattle.appendChild(seattleTotal);




// TOKYO!!!!!!!!!!!!

var tokyo = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
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

var cookieUlTokyo = document.getElementById('tokyo');

var totalTokyo = 0;

for (var j = 0; j < tokyo.hourlySales.length; j++){
  var cookieLiTokyo = document.createElement('li');
  cookieLiTokyo.textContent = hours[j] + ': ' + tokyo.hourlySales[j];
  cookieUlTokyo.appendChild(cookieLiTokyo);
  totalTokyo += tokyo.hourlySales[j];

}

var printTokyoTotal = document.createElement('li');
printTokyoTotal.textContent = 'Total: ' + totalTokyo;
cookieUlTokyo.appendChild(printTokyoTotal);




// DUBAI!!!!!!!!!

var dubai = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
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

dubai.salesPerHour();

var cookieUlDubai = document.getElementById('dubai');

var totalDubai = 0;

for (var k = 0; k < dubai.hourlySales.length; k++){
  var cookieLiDubai = document.createElement('li');
  cookieLiDubai.textContent = hours[k] + ': ' + dubai.hourlySales[k];
  cookieUlDubai.appendChild(cookieLiDubai);
  totalDubai += dubai.hourlySales[k];

}

var printDubaiTotal = document.createElement('li');
printDubaiTotal.textContent = 'Total: ' + totalDubai;
cookieUlDubai.appendChild(printDubaiTotal);



// PARIS!!!!!!!!!!!!

var paris = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
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

paris.salesPerHour();

var cookieUlParis = document.getElementById('paris');

var totalParis = 0;

for (var l = 0; l < paris.hourlySales.length; l++){
  var cookieLiParis = document.createElement('li');
  cookieLiParis.textContent = hours[l] + ': ' + paris.hourlySales[l];
  cookieUlParis.appendChild(cookieLiParis);
  totalParis += paris.hourlySales[l];

}

var printParisTotal = document.createElement('li');
printParisTotal.textContent = 'Total: ' + totalParis;
cookieUlParis.appendChild(printParisTotal);



// LIMA!!!!!!

var lima = {
  minCust: 2,
  maxCust: 16,
  avgSale: 2.6,
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

lima.salesPerHour();

var cookieUlLima = document.getElementById('lima');

var totalLima = 0;

for (var m = 0; m < lima.hourlySales.length; m++){
  var cookieLiLima = document.createElement('li');
  cookieLiLima.textContent = hours[m] + ': ' + lima.hourlySales[m];
  cookieUlLima.appendChild(cookieLiLima);
  totalLima += lima.hourlySales[m];

}

var printLimaTotal = document.createElement('li');
printLimaTotal.textContent = 'Total: ' + totalLima;
cookieUlLima.appendChild(printLimaTotal);
