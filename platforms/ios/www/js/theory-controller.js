angular.module('autoskola')
  .controller('TheoryController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/theory.json').success(function(response) {
      $scope.data = response.theory;
    });

  });
