angular.module('autoskola')
  .controller('OverviewController', function($scope, $http, OverviewService) {

    $scope.rewards = [];
    $scope.localData = {};
    $scope.tabName = 'tab-progres';

    $scope.setTab = function(tab) {
    	$scope.tabName = tab;
    };

    OverviewService.get().then(function(response) {
      $scope.rewards = response.rewards;
      $scope.localData = response.localData;
    });

    $scope.unlockReward = function(reward) {
      OverviewService.unlockReward(reward);
    }

  });
