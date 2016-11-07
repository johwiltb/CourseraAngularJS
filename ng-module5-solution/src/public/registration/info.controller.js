/**
 * Created by l3g3nd on 11/6/16.
 */
(function () {
    'use strict';

    angular.module('public')
        .controller('InfoController', InfoController);

    InfoController.$inject = ['RegistrationService'];
    function InfoController(RegistrationService) {
        var $ctrl = this;

        $ctrl.userData = RegistrationService.getUser();
    }
})();