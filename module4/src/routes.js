(function() {

    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.template.html'
            })

            .state('categoriesList', {
                url: '/categories',
                templateUrl: 'templates/main-categories.template.html',
                controller: 'MenuAppController as ctrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('itemList', {
                url: '/category/{itemId}',
                templateUrl: 'templates/main-items.template.html',
                // controller: 'ItemDetailsController as ictrl'
            });
    }

})();