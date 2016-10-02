(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("NarrowItDownService", NarrowItDownService)
  .constant('JSONPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
  .directive('foundItems', FoundItems);

  function FoundItems() {
     var ddo = {
     	templateUrl: 'foundItems.html',
     	scope: {
     	   found_items: '<found-items',
     	   onRemove: '&'
	}
     };
  }

  NarrowItDownController.$inject = ['NarrowItDownService'];
  function NarrowItDownController(NarrowItDownService) {
     var menu = this;
     
     // FOR TESTING ONLY
     var searchTerm = "chicken";
     // END TESTING
     menu.found = NarrowItDownService.getMatchedMenuItems(searchTerm);

     menu.removeItem = function(index) {
     	menu.found.splice(index, 1);
     };
  }


  NarrowItDownService.$inject = ['$http', 'JSONPath'];
  function NarrowItDownService($http, JSONPath) {
    var service = this;
    var foundItems = [];


    service.getMatchedMenuItems = function(searchTerm) {
       var response = $http({
	 method: "GET",
	 url: JSONPath
      });

      response.then(function(data) {
      	 console.log(data.data.menu_items.length);
      	 var menuStuff = data.data.menu_items;
      	 console.log(menuStuff.length);
	
	 for (var i = 0; i < menuStuff.length; i++) {
	    if(menuStuff[i].description.indexOf(searchTerm) >= 0) {
	       foundItems.push(menuStuff[i]);
	    }
	 }

	 console.log(foundItems);
	 console.log(foundItems.length);
      	 // return found items
      	 return foundItems;
     	 
      })
      .catch(function(error) {
      	 console.log("ERROR: " + error);
      });
    }
  }
})();
