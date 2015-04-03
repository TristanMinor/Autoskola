angular.module('autoskola')
  .controller('QuestionsSituationsController', function($scope, $http, SituationsService) {

    $scope.data = [];
    $scope.localData = {};

    SituationsService.get().then(function(response) {
      $scope.data = response.data;
      $scope.localData = response.localData;
    });

    $scope.pinQuestion = function(question) {
      SituationsService.pinQuestion(question);
    }

    $scope.hideQuestion = function(question) {
      SituationsService.hideQuestion(question);
    }

  });
