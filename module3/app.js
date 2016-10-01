(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("NarrowItDownService", NarrowItDownService)
  .constant('JSONPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownController.$inject = ['NarrowItDownService'];
  function NarrowItDownController(NarrowItDownService) {
     var menu = this;

     var promise = NarrowItDownService.getMatchedMenuItems();

     promise.then(function(response){
        console.log("Win!");
        console.log(response.data);
     })
     .catch(function(error){
     	console.log("There was an error: " + error);
   
     });
  
  }


  NarrowItDownService.$inject = ['$http', 'JSONPath'];
  function NarrowItDownService($http, JSONPath) {
    var service = this;

    service.getMatchedMenuItems = function() {
      var response = $http({
	 method: "GET",
	 url: JSONPath
      });
      
      return response;
    }
  }
})();
