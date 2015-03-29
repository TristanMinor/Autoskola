angular.module('autoskola')
  .controller('TestsController', function($scope, $http) {
    $scope.tests = [];

    $http.get('json/tests.json').success(function(response) {
      $scope.tests = response.tests;
    });

  });
