angular.module('myApp')
.controller('signupCtrl',['$scope', 'users', function($scope, users){ /*we have scope in the start the array so that it doesnt mess up when minified */
    $scope.title = "Signup page ";
    $scope.users = users;
    $scope.signup = function(){
        alert(JSON.stringify($scope.user));
    }
}]);