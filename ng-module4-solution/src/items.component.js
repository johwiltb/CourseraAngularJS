(function(){

    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'templates/items.template.html',
            controller: 'ItemComponentController as ictrl',
            bindings: {
                itemlist: '<'
            }

        });



})();