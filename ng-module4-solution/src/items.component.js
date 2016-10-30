(function(){

    'use strict';

    angular.module('MenuApp')
        .component('items', {
            // template: '<div>{{ mctrl.testMsg }}</div>',
           templateUrl: 'templates/items.template.html',
            controller: 'MenuAppController as mctrl',
            bindings: {
                itemList: '<'
            }
        });
})();