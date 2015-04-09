angular.module('autoskola')
  .controller('TestController', function($http, $scope, $state, LawService) {

    $scope.params = $state.params;
    $scope.test = {};

    $scope.view = {
      question: 0
    };

    $scope.question = {};

    $http.get('json/tests.json').success(function(response) {
      var tests = response.tests;
      tests.forEach(function(test) {
        if (test.id == $scope.params.id) {
          $scope.test = test;
        }
      });

      $scope.view.question = 0;

      $scope.goToQuestion(0);
    });

    $scope.goToQuestion = function(id) {
      var question = $scope.test.questions[id];

      if (! question) {
        return;
      }

      $scope.view.question = id;

      if (question.type == 'law') {
        LawService.getQuestion(question.questionId).then(function(q) {
          $scope.question = q;
        });
      }
    }

    $scope.nextQuestion = function() {
      $scope.selectedAnswer = null;
      $scope.goToQuestion($scope.view.question + 1);
    }

    $scope.answerSelected = function(answer) {
      $scope.selectedAnswer = answer;
    }

  });
