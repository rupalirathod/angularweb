angular.module('myApp')
.controller('contactlistCtrl',['$scope', 'contacts', function($scope, contacts){ /*we have scope in the start the array so that it doesnt mess up when minified */
    $scope.title = "Contacts of the user page";
    $scope.contacts = contacts;
    
}]);