(function(){

    'use strict';

    angular.module('MenuApp')
        .component('items', {
           templateUrl: 'templates/items.template.html',
            controller: 'MenuAppController as mctrl',
            bindings: {
                items: '<'
            }
        });

})();