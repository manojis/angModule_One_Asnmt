(function () {
  'use strict';

angular.module('Lunch-Checker',[])
.controller('lunchcheckerController', lunchcheckerController);

lunchcheckerController.$inject = ['$scope'];
function lunchcheckerController($scope){

    $scope.lunchMenu="";
    $scope.mess = "";
    $scope.count = 0;

      $scope.formControl = function(){
        var noOfWords = $scope.lunchMenu.split(',');
        var n=0;
        for (var i=0 ; i < noOfWords.length ; i++){
           if (noOfWords[i] != ""){
             var n = n+1;
           }
        }
        $scope.count = n;
        return $scope.count;
    };
      $scope.message = function(){
        if($scope.count ==0){
          $scope.mess = "Please enter data first"
        }
        else if($scope.count>3){
          $scope.mess = "Too much!"
        }else{
          $scope.mess = "Enjoy!"
        }
        return $scope.mess;
      };
}
})();
