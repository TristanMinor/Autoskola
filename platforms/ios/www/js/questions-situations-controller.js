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

    $scope.hasHiddenQuestion = function(list) {
      var has = false;
      list.forEach(function(bndl) {
        bndl.questions.forEach(function(question) {
          if ($scope.localData[question.id]) {
            if ($scope.localData[question.id].hidden) {
              has = true;
            };
          };
        });
      });
      return has;
    }

    $scope.hasHiddenBundle = function(list) {
      var has = false;
        list.forEach(function(question) {
          if ($scope.localData[question.id]) {
            if ($scope.localData[question.id].hidden) {
              has = true;
            };
          };
        });
      return has;
    }

    $scope.hasAllHiddenQuestions = function(list) {
      var hiddenQuestions = 0;
      var questions = 0;
      var has = false;
      list.forEach(function(bndl) {
        bndl.questions.forEach(function(question) {
          questions++;
          if ($scope.localData[question.id]) {
            if ($scope.localData[question.id].hidden) {
              hiddenQuestions++;
            };
          }
        });
      });
      if (questions == hiddenQuestions) {
        has = true;
      }
      return has;
    }

  });
