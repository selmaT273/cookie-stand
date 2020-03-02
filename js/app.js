'use strict';

var seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  setCookieProduction: function(){
    this.avgSale = randomProduction(this.minCust, this.maxCust) + ' cookies ';
  }
};

seattle.setCookieProduction();

function randomProduction(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
