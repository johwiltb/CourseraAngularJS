(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodCorrect = "";

  $scope.checkTooMuch = function () {
    var string = $scope.foodList;
    console.log(string);
    if (string == undefined || string == "") {
      $scope.foodCorrect = "Please enter data first";
    } else {
      var list = string.split(',');
      var ln = list.length
      if (list[ln - 1] == "") {
        ln = ln - 1;
      }
      if (ln == 1 && list[0] == "") {
        $scope.foodCorrect = "Please enter data first";
      }
      if (ln > 3) {
        $scope.foodCorrect = "Too Much"
      } else {
        $scope.foodCorrect = "Enjoy!"
      }
    }
  }
}

})();
