(function () {
    
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController)
        .controller('ItemDetailsController', ItemDetailsController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var ctrl = this;

        var response = MenuDataService.getAllCategories();

        response.then(function (data) {
            ctrl.categories = data;
        });


        ctrl.getItems = function (category) {
            var response = MenuDataService.getItemsForCategory(category);

            response.then(function (data) {
                ctrl.items = data;
                console.log(data);
           });
        };

    }

    ItemDetailsController.$inject = ['$stateParams', 'MenuAppController'];
    function ItemDetailsController($stateParams, MenuAppController) {
        console.log("Made it to ItemDetails");
        var itemDetail = this;

        var items = MenuAppController.items;

        var item = items[$stateParams.itemId];

        itemDetail.name = item.name;
        itemDetail.desc = item.description;
    }
    
})();