angular.module('autoskola')
  .controller('QuestionsController', function($scope) {

    $scope.tabName = 'tab-law';

    $scope.setTab = function(tab) {
    	$scope.tabName = tab;
    }

  });
