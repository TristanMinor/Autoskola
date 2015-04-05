angular.module('autoskola')
  .controller('QuestionsSignsController', function($scope, $http, SignsService) {

    $scope.data = [];
    $scope.localData = {};

    SignsService.get().then(function(response) {
      $scope.data = response.data;
      $scope.localData = response.localData;
    });

    $scope.pinQuestion = function(question) {
      SignsService.pinQuestion(question);
    }

    $scope.hideQuestion = function(question) {
      SignsService.hideQuestion(question);
    }

  });
