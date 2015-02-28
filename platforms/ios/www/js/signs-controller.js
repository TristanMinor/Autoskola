angular.module('autoskola')
  .controller('SignsController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/signs.json').success(function(response) {
      $scope.data = response.signs;
    });

  });
