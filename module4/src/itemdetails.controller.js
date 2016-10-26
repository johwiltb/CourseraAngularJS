/**
 * Created by l3g3nd on 10/26/16.
 */
(function(){

    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailsController', ItemDetailsController);

    ItemDetailsController.$inject = ['$stateParams', 'MenuAppController'];
    function ItemDetailsController($stateParams, MenuAppController) {
        var itemDetail = this;

        var items = MenuAppController.items;

        var item = items[$stateParams.itemId];

        itemDetail.name = item.name;
        itemDetail.desc = item.description;
    }

})();