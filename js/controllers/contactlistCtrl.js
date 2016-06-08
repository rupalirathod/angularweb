angular.module('myApp')
.controller('contactlistCtrl',['$scope', function($scope){ /*we have scope in the start the array so that it doesnt mess up when minified */
    $scope.title = "Contacts of the user page";
    
}]);