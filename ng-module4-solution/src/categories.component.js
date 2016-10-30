(function() {

    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'templates/categories.template.html',
            controller: 'MenuAppController as mctrl',
            bindings: {
                list: '<'
            },
            resolve: {
                list: ['MenuDataService', function (MenuDataService) {
                    var data = MenuDataService.getAllCategories();
                    MenuAppController.categories = data.$$state.value;
                }]
            }

        });

})();