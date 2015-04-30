angular.module('autoskola')
  .controller('TestController', function ($scope, $state, $ionicSlideBoxDelegate, $ionicModal, LawService, NoticeService, SignsService, SituationsService, TheoryService, TestsService) {

    $scope.params = $state.params;
    $scope.test = {};
    $scope.questions = [];
    $scope.answers = [];
    $scope.testExplainings = [];
    $scope.explainings = [];

    $scope.optionsModel = ["a","b","c"];
    $scope.test = TestsService.getTest($scope.params.id)

    $scope.view = {
      question: 0,
      checked: false,
      selectedAnswer: null
    };

    // fill questions from test with real data
    // from the questions
    $scope.test.questions.forEach(function(question) {
      console.log($state.params.id);
      switch (question.type) {
        case 'law':
          var q = LawService.getQuestion(question.questionId);
          var e = TheoryService.getLawExplanation(question.questionId);
          $scope.questions.push(q);
          $scope.answers.push('');
          $scope.testExplainings.push(e);
          break;
        case 'notice':
          var q = NoticeService.getQuestion(question.questionId);
          var e = TheoryService.getNoticeExplanation(question.questionId);
          $scope.questions.push(q);
          $scope.answers.push('');
          $scope.testExplainings.push(e);
          break;
        case 'sign':
          var q = SignsService.getQuestion(question.questionId);
          var e = TheoryService.getSignsExplanation(question.questionId);
          $scope.questions.push(q);
          $scope.answers.push('');
          $scope.testExplainings.push(e);
          break;
        case 'situation':
          var q = SituationsService.getQuestion(question.questionId);
          var e = TheoryService.getSituationsExplanation(question.questionId);
          $scope.questions.push(q);
          $scope.answers.push('');
          $scope.testExplainings.push(e);
          break;
      }
    });

    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.enableSlide(false);

    $scope.answerSelected = function (answer, answers) {
      if ($scope.view.checked) {
        return false;
      }
      var answerIndex = answers.indexOf(answer) || 0;
      $scope.answers[$scope.view.question] = answerIndex;
      $scope.view.selectedAnswer = answerIndex;
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
      console.log('Good answers:', good);
      console.log('Bad answers:', $scope.questions.length - good);
    }

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-explaining.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.openModalExplaining = function() {
      $scope.modal.show();
      $scope.explainings = $scope.testExplainings[$scope.view.question];
      console.log($scope.testExplainings);
      console.log($scope.view.question);
      console.log($scope.questions[$scope.view.question]);
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.chapter.remove();
      $scope.content.remove();
    });

  });
