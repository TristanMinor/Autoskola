angular.module('autoskola')
  .controller('TestController', function ($http, $scope, $state, LawService, $ionicSlideBoxDelegate) {

    $scope.params = $state.params;
    $scope.test = {};

    $scope.questions = [];
    $scope.answers = [];

    $scope.view = {
      question: 0
    };

    $http.get('json/tests.json').success(function (response) {
      var tests = response.tests;

      tests.forEach(function (test) {
        if (test.id == $scope.params.id) {
          $scope.test = test;
        }
      });

      // fill questions from test with real data
      // from the questions
      $scope.test.questions.forEach(function(question) {
        if (question.type == 'law') {
          var q = LawService.getQuestion(question.questionId);
          $scope.questions.push(q);
          $scope.answers.push('');
        }
        // todo: make other questions types as signs, etc
      });
      $ionicSlideBoxDelegate.update();
    });

    $scope.nextQuestion = function () {
      $scope.selectedAnswer = null;
      $scope.goToQuestion($scope.view.question + 1);
    }

    $scope.answerSelected = function (answer) {
      $scope.answers[$scope.view.question] = answer.option;
      //
    }

    $scope.kokotko = function() {
      $ionicSlideBoxDelegate.next();
      $ionicSlideBoxDelegate.enableSlide(false);
    }

    $scope.openHelp = function() {
      console.log('help');
      console.log($scope.view.question);
      console.log($scope.questions[$scope.view.question]);
    }

  });
