angular.module('myApp')
.controller('aboutCtrl', ['$scope', function($scope){ /*we have scope in the start the array so that it doesnt mess up when minified */
    $scope.title = "About page";
    
}]);