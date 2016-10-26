(function(){

    'use strict';

    angular.module('MenuApp')
        .component('items', {
           templateUrl: 'templates/items.template.html',
            controller: 'ItemDetailsController as ictrl',
            bindings: {
                items: '<'
            }
        });

})();