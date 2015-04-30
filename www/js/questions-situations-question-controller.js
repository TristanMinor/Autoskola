angular.module('autoskola')
  .controller('QuestionsSituationsQuestionController', function($scope, $state, $ionicModal, SituationsService) {

    $scope.localData = {};
    $scope.explainings = [];
    $scope.optionsModel = ["a", "b", "c"];

    $scope.localData = SituationsService.get().localData;
    $scope.question = SituationsService.getQuestion($state.params.id);
    // $scope.explainings = SituationsTheoryService
    // for each explaining
    $scope.question.explaining.forEach(function(xpln) {
        // Add the content to explainings
        $scope.explainings.push(xpln);
        console.log($scope.explainings);
    });

    $scope.pinQuestion = function(item) {
      SituationsService.pinQuestion(item);
    }

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-explaining.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    $scope.goToNextQuestion = function() {
      $state.go('search', {
        animation: 'slide-in-left'
      });
      console.log("swiped left");
    };

    $scope.goToPreviousQuestion = function() {
      $state.go('tabs.questions', {
        animation: 'slide-in-right'
      });
      console.log("swiped right");
    };

  });
