angular.module('autoskola')
  .controller('TestController', function ($http, $scope, $state, LawService, $ionicSlideBoxDelegate) {

    $scope.params = $state.params;
    $scope.test = {};

    $scope.questions = [];
    $scope.answers = [];
    $scope.optionsModel = ["a","b","c"];

    $scope.view = {
      question: 0,
      checked: false,
      selectedAnswer: null
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
      $ionicSlideBoxDelegate.enableSlide(false);
    });

    $scope.answerSelected = function (answer, answers) {
      if ($scope.view.checked) {
        return false;
      }
      var answerIndex = answers.indexOf(answer) || 0;
      $scope.answers[$scope.view.question] = answerIndex;
      $scope.view.selectedAnswer = answerIndex;
    }

    // show modal window with explaining
    $scope.openHelp = function() {
      console.log('help');
      console.log($scope.view.question);
      console.log($scope.questions[$scope.view.question]);
    }

    $scope.check = function() {
      $scope.view.checked = true;
    }

    $scope.next = function() {
      $scope.view.checked = false;
      $scope.view.selectedAnswer = null;
      $ionicSlideBoxDelegate.next();
      $ionicSlideBoxDelegate.enableSlide(false);
    }

    // show modal window with result
    $scope.result = function() {

      var good = 0;

      // for each question
      $scope.questions.forEach(function(question, questionIndex) {

        question.answers.forEach(function(answer, answerIndex) {
          if (answer.correct && $scope.answers[questionIndex] == answerIndex) {
            good++;
          }
        });
      });

      console.log('Good ansers:', good);
      console.log('Bad answers:', $scope.questions.length - good);
    }

  });
