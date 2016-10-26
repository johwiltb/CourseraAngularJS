(function() {

    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', '$q'];
    function MenuDataService($http, $q) {
        var service = this;

        service.getAllCategories = function() {
            var deferred = $q.defer();

            $http.get("https://davids-restaurant.herokuapp.com/categories.json")
                .success(function (data) {
                    deferred.resolve(data.data);
                })
                .error(function (reason){
                    deferred.reject(reason);
                });
            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
                .then(function (data) {
                    return data;
                });
        };
    }

})();