angular.module('autoskola')
  .controller('LawController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/law.json').success(function(response) {
      $scope.data = response.law;
    });

    $scope.tabName = 'test-1';

    $scope.setTab = function(tab) {
    	$scope.tabName = tab;
    }

  });
