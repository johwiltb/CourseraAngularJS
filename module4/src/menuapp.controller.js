(function () {
    
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        console.warn("Got to MenuAppController");
        var ctrl = this;

        ctrl.getCategories = JSON.parse(MenuDataService.getAllCategories());
        console.log("Categories: " + ctrl.getCategories);
    }
    
})();