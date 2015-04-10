angular.module('autoskola')
  .controller('QuestionsLawController', function($scope, $http, LawService) {

    $scope.data = [];
    $scope.localData = {};

    $scope.data = LawService.get().data;
    $scope.localData = LawService.get().localData;

    $scope.pinQuestion = function(item) {
      LawService.pinQuestion(item);
    }

    $scope.hideQuestion = function(item) {
      LawService.hideQuestion(item);
    }

  });