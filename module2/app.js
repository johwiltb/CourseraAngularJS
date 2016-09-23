(function () {

  var shoppingList = [
    { name: "Milk", quantity: 3 },
    { name: "Donuts", quantity: 7 },
    { name: "Cookies", quantity: 5 },
    { name: "Chocolate", quantity: 3 },
    { name: "Peanut Butter", quantity: 8 },
    { name: "Pepto Bismol", quantity: 4 }
  ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var tobuy = this;
    tobuy.list = ShoppingListCheckOffService.getToBuyItems();

    tobuy.bought = function(itemIndex) {
      ShoppingListCheckOffService.moveBought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var allbought = this;
      allbought.list = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var moveItem;
    var bought = [];
    var to_buy = shoppingList;

    service.getBoughtItems = function() {
      return bought;
    };

    service.getToBuyItems = function() {
      return to_buy;
    };

    service.moveBought = function (itemIndex) {
      bought.push(to_buy.splice(itemIndex, 1)[0]);
    };
  }
})();
