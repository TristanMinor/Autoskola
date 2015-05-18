angular.module('autoskola')
  .controller('TestController', function($scope, $state, $ionicSlideBoxDelegate, $ionicModal, $ionicPopup, LawService, NoticeService, SignsService, SituationsService, TheoryService, TestsService) {

    $scope.params = $state.params;
    $scope.test = {};
    $scope.localDataTests = {};
    $scope.questions = [];
    $scope.answers = [];
    $scope.testExplainings = [];
    $scope.explainings = [];

    $scope.optionsModel = ["a", "b", "c"];
    $scope.test = TestsService.getTest($scope.params.id);
    $scope.localDataTests = TestsService.get().localDataTests;

    $scope.view = {
      question: 0,
      checked: false,
      selectedAnswer: null
    };

    // fill questions from test with real data
    // from the questions
    $scope.test.questions.forEach(function(question) {
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

    $scope.answerSelected = function(answer, answers) {
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
      $ionicSlideBoxDelegate.update();
      $scope.view.selectedAnswer = null;
      $scope.view.checked = false;
      $ionicSlideBoxDelegate.next();
      $ionicSlideBoxDelegate.enableSlide(false);
    }
    // show modal window with result
    $scope.result = function() {
      var good = 0;
      // for each question
      $scope.questions.forEach(function(question, questionIndex) {
        // for each answer
        question.answers.forEach(function(answer, answerIndex) {
          if (answer.correct && $scope.answers[questionIndex] == answerIndex) {
            good = good + (1*question.points);
            // good++;
            console.log(question.points);
          }
        });
      });
      console.log('Good points:', good);
      testId = $scope.test.id;
      TestsService.updateTestScore(testId, good);
      $scope.openModalResults();
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

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-results.html', function($ionicModal) {
      $scope.modal.results = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up',
    });

    $scope.openModalResults = function() {
      $scope.modal.results.show();
    };

    $scope.closeModalResults = function() {
      $scope.modal.results.hide();
      if ($state.params.id<36) {
        $state.go('tabs.tests', {});
      } else {
        $state.go('tabs.questions', {});
      }
    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.modal.results.remove();
      $scope.content.remove();
    });

    $scope.showConfirmExitTest = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Ukončiť test',
        template: 'Naozaj chceš ukončiť test?',
        buttons: [{
          text: 'Nie',
          type: 'button-clear button-stable'
        }, {
          text: 'Áno',
          type: 'button-clear button-positive',
          onTap: function(e) {
            $scope.view = {
              question: 0,
              checked: false,
              selectedAnswer: null
            };
            if ($state.params.id<36) {
              $state.go('tabs.tests', {});
            } else {
              $state.go('tabs.questions', {});
            }
          }
        }]
      });

    };

  });
