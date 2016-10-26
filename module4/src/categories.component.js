(function() {

    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'templates/categories.template.html',
            controller: 'MenuAppController as ctrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }

        });

})();