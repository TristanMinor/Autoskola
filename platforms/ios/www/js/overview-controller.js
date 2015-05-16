angular.module('autoskola')
  .controller('OverviewController', function($scope, OverviewService, LawService, NoticeService, SignsService, SituationsService, $ionicModal) {

    $scope.rewards = [];
    $scope.localDataLaw = [];
    $scope.selectedReward = {};
    $scope.tabName = 'tab-progres';

    $scope.localDataRewards = OverviewService.get().localDataRewards;
    $scope.localDataLaw = LawService.get().localData;
    $scope.localDataNotice = NoticeService.get().localData;
    $scope.localDataSigns = SignsService.get().localData;
    $scope.localDataSituations = SituationsService.get().localData;

    $scope.rewards = OverviewService.get().rewards;
    $scope.law = LawService.get().data;
    $scope.notice = NoticeService.get().data;
    $scope.signs = SignsService.get().data;
    $scope.situations = SituationsService.get().data;

    $scope.setTab = function(tab) {
    	$scope.tabName = tab;
    };

    $scope.unlockReward = function(reward) {
      OverviewService.unlockReward(reward);
    }

    // Load the modal from the given template URL
    // $ionicModal.fromTemplateUrl('templates/modals/modal-reward.html', function($ionicModal) {
    //   $scope.modal = $ionicModal;
    // }, {
    //   scope: $scope,
    //   animation: 'slide-in-up',
    // });

    // $scope.openRewardModal = function(reward) {
    //   $scope.selectedReward = reward;
    //   $scope.modal.show();
    // };
    //
    // $scope.closeRewardModal = function() {
    //   $scope.modal.hide();
    // };

    //Cleanup the modal when we're done with it!
    // $scope.$on('$destroy', function() {
    //   $scope.modal.remove();
    //   $scope.chapter.remove();
    //   $scope.content.remove();
    // });

  });
