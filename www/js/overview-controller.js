angular.module('autoskola')
  .controller('OverviewController', function($scope, $http, OverviewService, $ionicModal) {

    $scope.rewards = [];
    $scope.localData = {};
    $scope.tabName = 'tab-progres';
    $scope.selectedReward = {};

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

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-reward.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up',
    });

    $scope.openRewardModal = function(reward) {
      $scope.selectedReward = reward;
      $scope.modal.show();
    };

    $scope.closeRewardModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.chapter.remove();
      $scope.content.remove();
    });

  });
