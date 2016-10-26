(function () {
    
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var ctrl = this;

        var response = MenuDataService.getAllCategories();

        response.then(function (data) {
            ctrl.categories = data;
        });


        ctrl.getItems = function (category) {
            var response = MenuDataService.getItemsForCategory(category);

            response.then(function (data) {
                ctrl.items = data;
                console.log(data);
           });
        };

    }
    
})();