(function () {
    'use strict';

    var menuApp = angular.module('NarrowItDownApp', []);

    menuApp.constant('JSONPath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

    menuApp.controller('NarrowItDownController', ['$scope', '$log', 'MenuSearchService', function ($scope, $log, MenuSearchService) {

        var ctrl = this;
        ctrl.found = [];
        ctrl.search = function() {
            ctrl.found = [];
            ctrl.error = "";
            if (ctrl.searchTerm === "" ) {
                ctrl.error = "No search term entered!";
                return;
            }
            var response = MenuSearchService.getMatchedMenuItem(ctrl.searchTerm);
            response.then(function (data) {
                var menuItems = data.data.menu_items;
                $log.info(ctrl.searchTerm);
                for (var i = 0; i < menuItems.length; i++) {
                    if (menuItems[i].description.search(ctrl.searchTerm) >= 0) {
                        ctrl.found.push(menuItems[i]);
                    }
                }
                $log.info(ctrl.found);
                $log.info("Length: " + ctrl.found.length);
                if (ctrl.found.length === 0) {
                    ctrl.error = "No Items Found!";
                }
            })
                .catch(function (error) {
                $log.error("ERROR: " + error);
            });
        };



        ctrl.removeItem = function(itemIndex) {
            $log.debug("Removing: " + itemIndex + " - " + ctrl.found[itemIndex].toString());
            ctrl.found.splice(itemIndex, 1);
        };


    }]);

    menuApp.service('MenuSearchService', ['$http', '$log', 'JSONPath', function ($http, $log, JSONPath) {
        var service = this;

        service.getMatchedMenuItem = function (searchTerm) {

            var response = $http({
                method: 'GET',
                url: JSONPath
            });

            return response;
        };
    }]);

    menuApp.directive('foundItems', [function() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: "=",
                onRemove: "&"
            }
        };

        return ddo;
    }]);
})();



