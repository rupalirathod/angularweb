angular.module('myApp')
.controller('loginCtrl',['$scope', function($scope){ /*we have scope in the start the array so that it doesnt mess up when minified */
    $scope.title = "Login page";
    
}]);