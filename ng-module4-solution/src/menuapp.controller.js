(function () {
    
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var ctrl = this;

        ctrl.testMsg = "This is a test in MenuAppController";

        var response = MenuDataService.getAllCategories();

        response.then(function (data) {
            ctrl.categories = data;
        });


        ctrl.getItems = function (category) {
            console.log("Running getItems");
            var response = MenuDataService.getItemsForCategory(category);

            response.then(function (data) {
                ctrl.items = data.data.menu_items;
                console.log(ctrl.items);
            });
        };

    }
})();