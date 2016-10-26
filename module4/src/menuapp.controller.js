(function () {
    
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var ctrl = this;

        ctrl.categories = MenuDataService.getAllCategories();

        // ctrl.categories.push({
        //     name: "fun"
        // });

        console.log(ctrl.categories);


    }
    
})();