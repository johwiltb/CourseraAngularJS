(function(){

    'use strict';

    angular.module('MenuApp')
        .controller('ItemComponentController', ItemComponentController);

    ItemComponentController.$inject = ['$stateParams','MenuDataService']
    function ItemComponentController($stateParams, MenuDataService) {
        var ctrl = this;


        ctrl.categoryName = "This is a test name";
        ctrl.$onInit = function () {
            ctrl.categoryName = $stateParams.name;

            var response = MenuDataService.getItemsForCategory($stateParams.itemId);

            response.then(function(data) {
                ctrl.itemsList = data.data.menu_items;
            })
        }
    }
})();