angular.module('autoskola')
  .controller('QuestionsSignsController', function($scope, SignsService) {

    $scope.data = [];
    $scope.localData = {};

    $scope.data = SignsService.get().data;
    $scope.localData = SignsService.get().localData;

    $scope.pinQuestion = function(question) {
      SignsService.pinQuestion(question);
    }

    $scope.hideQuestion = function(question) {
      SignsService.hideQuestion(question);
    }

    $scope.unhideQuestion = function(question) {
      SignsService.unhideQuestion(question);
    }

  });
