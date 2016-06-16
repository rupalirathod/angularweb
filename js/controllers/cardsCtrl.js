angular.module('myApp')
.controller('cardsCtrl',['$scope', 'Cards', function($scope, Cards){ /*we have scope in the start the array so that it doesnt mess up when minified */
    $scope.title = "Cards page";
    Cards.get().then(function(data) {
      $scope.cards = data;
    });
}]);