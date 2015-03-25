angular.module('autoskola')
  .controller('QuestionsLawController', function($scope, $http, LawService) {

    $scope.data = [];
    $scope.localData = {};

    LawService.get().then(function(response) {
      $scope.data = response.data;
      $scope.localData = response.localData;
    });

    $scope.pinQuestion = function(item) {
      LawService.pinQuestion(item);
    }

    $scope.hideQuestion = function(item) {
      LawService.hideQuestion(item);
    }

  });