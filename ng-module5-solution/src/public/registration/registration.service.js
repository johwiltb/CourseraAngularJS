(function () {
    'use strict';

    angular.module('common')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$http', 'ApiPath'];
    function RegistrationService($http, ApiPath) {
        var service = this;

        service.getMenuItem = function (short_name) {
            return $http.get(ApiPath + '/menu_items/' + short_name + '.json');
        }

        service.storeUser = function(userObj) {
            service.user = userObj;
        }

        service.getUser = function () {
            return service.user;
        }
    }
})();