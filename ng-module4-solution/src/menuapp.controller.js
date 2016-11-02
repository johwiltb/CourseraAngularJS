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
    }
})();