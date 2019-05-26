(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.removeItem = function (itemName, itemQuantity, index) {
    ShoppingListCheckOffService.removeItemAndAddToBought(itemName, itemQuantity, index);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [{ name: "Mandarins", quantity: 10 }, { name: "Water bottles", quantity: 10 },
{ name: "Mangoes", quantity: 5 },{ name: "Bananas", quantity: 10 },{ name: "Strawberries", quantity: 20 }];
  var boughtItems = [];

  //Getters for items
  service.getItemsToBuy = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  //Fn to remove from toBuy list and add to bought list
  service.removeItemAndAddToBought = function (itemName, quantity, index) {
    toBuyItems.splice(index, 1);
    boughtItems.push({
      name: itemName,
      quantity: quantity
    });
  };


}

})();
