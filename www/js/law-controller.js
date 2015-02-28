angular.module('autoskola')
  .controller('LawController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/law.json').success(function(response) {
      $scope.data = response.law;
    });

  });
