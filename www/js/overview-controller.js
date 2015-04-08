angular.module('autoskola')
  .controller('OverviewController', function($scope, $http, OverviewService) {

    $scope.rewards = [];
    $scope.localData = {};

    OverviewService.get().then(function(response) {
      $scope.rewards = response.rewards;
      $scope.localData = response.localData;
    });

    $scope.unlockReward = function(reward) {
      OverviewService.unlockReward(reward);
    }
    
  });
