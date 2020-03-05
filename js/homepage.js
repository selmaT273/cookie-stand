var locElement = document.getElementById('location-info');

function StoreInfo (city, address, hours, contact) {
  this.city = city;
  this.address = address;
  this.hours = hours;
  this.contact = contact;
}

StoreInfo.prototype.render = function(){
  var storeInfoElement = document.createElement('div');
  storeInfoElement.classList.add('store-info');


  var cityElement = document.createElement('h3');
  cityElement.textContent = this.city;
  storeInfoElement.appendChild(cityElement);

  var addressElement = document.createElement('p');
  addressElement.textContent = this.address;
  storeInfoElement.appendChild(addressElement);

  var hoursElement = document.createElement('p');
  hoursElement.textContent = this.hours;
  storeInfoElement.appendChild(hoursElement);

  var contactElement = document.createElement('p');
  contactElement.textContent = this.contact;
  storeInfoElement.appendChild(contactElement);

  locElement.appendChild(storeInfoElement);

};

var seattle = new StoreInfo('Seattle', '123 Main Way', '6am to 8pm Daily', '555-5555');
var tokyo = new StoreInfo('Tokyo', '456 Side Rd', '6am to 8pm Daily', '444-4444');
var dubai = new StoreInfo('Dubai', '789 Other Dr', '6am to 8pm Daily', '333-3333');
var paris = new StoreInfo('Paris', '101 Delta Cir', '6am to 8pm Daily', '222-2222');
var lima = new StoreInfo('Lima', '111 NewBo Way', '6am to 8pm Daily', '111-1111');

var eachStore = [seattle, tokyo, dubai, paris, lima];

for(var i = 0; i < eachStore.length; i++){
  eachStore[i].render();
}
