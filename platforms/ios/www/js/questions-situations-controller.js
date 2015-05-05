angular.module('autoskola')
  .controller('QuestionsSituationsController', function($scope, SituationsService) {

    $scope.data = [];
    $scope.localData = {};

    $scope.data = SituationsService.get().data;
    $scope.localData = SituationsService.get().localData;

    $scope.pinQuestion = function(question) {
      SituationsService.pinQuestion(question);
    }

    $scope.hideQuestion = function(question) {
      SituationsService.hideQuestion(question);
    }

    $scope.unhideQuestion = function(question) {
      SituationsService.unhideQuestion(question);
    }

  });
