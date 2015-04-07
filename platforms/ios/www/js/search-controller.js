angular.module('autoskola')
  .controller('SearchController', function($scope, $ionicHistory) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

  });
