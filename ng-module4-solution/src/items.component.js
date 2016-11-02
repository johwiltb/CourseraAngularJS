(function(){

    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'templates/items.template.html',
            // controller: 'MenuAppController as mctrl',
            controller: ItemComponentController,
            bindings: {
                itemlist: '<'
            }

        });

    ItemComponentController.$inject = ['$stateParams','MenuDataService']
    function ItemComponentController($stateParams, MenuDataService) {
        var ctrl = this;

        ctrl.$onInit = function () {
            var response = MenuDataService.getItemsForCategory($stateParams.itemId);

            response.then(function(data) {
                ctrl.itemsList = data.data.menu_items;
            })
        }
    }

})();