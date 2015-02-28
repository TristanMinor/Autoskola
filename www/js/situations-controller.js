angular.module('autoskola')
  .controller('SituationsController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/situations.json').success(function(response) {
      $scope.data = response.situations;
    });

  });
