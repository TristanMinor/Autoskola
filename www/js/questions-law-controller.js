angular.module('autoskola')
  .controller('QuestionsLawController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/law.json').success(function(response) {
      $scope.data = response.law;
    });

  });
