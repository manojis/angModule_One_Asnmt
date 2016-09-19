(function () {
  'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController',['$scope','$filter',diController]);

function diController($scope,$filter){
    $scope.name="manoj";

    $scope.displayNumeric = function(){
      var upper = $filter('uppercase');
      $scope.name = upper($scope.name);
    };
}
})();
