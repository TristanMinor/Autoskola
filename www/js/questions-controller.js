angular.module('autoskola')
  .controller('QuestionsController', function($scope, $state) {

    $scope.tabName = 'tab-law';

    $scope.setTab = function(tab) {
    	$scope.tabName = tab;
    };

    $scope.goToSearch = function() {
      $state.go('search');
    };

  });
