(function () {
    'use strict';

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['RegistrationService', 'ApiPath'];
    function RegistrationController(RegistrationService, ApiPath) {

        var $ctrl = this;
        $ctrl.msg = "";

        $ctrl.submit = function() {
            var userObj = {
                fname: $ctrl.fname,
                lname: $ctrl.lname,
                email: $ctrl.email,
                phone: $ctrl.phone
            };
            if ($ctrl.favorite === undefined || $ctrl.favorite == "") {
                $ctrl.msg = "Your Information has been saved"
                RegistrationService.storeUser(userObj);
            } else {
                $ctrl.favorite = $ctrl.favorite.toUpperCase();
                var response = RegistrationService.getMenuItem($ctrl.favorite);

                response
                    .success(function (data) {
                        userObj.favItem = data;
                        userObj.favItemUrl = ApiPath + "/images/" + data.short_name + '.jpg';
                        $ctrl.error = "";
                        $ctrl.msg = "Your Information has been saved"
                        RegistrationService.storeUser(userObj);
                    })
                    .error(function (resp) {
                        $ctrl.favItem = "";
                        $ctrl.error = "No such menu number exists!";
                    })
            }

        }

    }

})();