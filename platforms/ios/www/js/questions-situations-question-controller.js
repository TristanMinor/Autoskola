angular.module('autoskola')
  .controller('QuestionsSituationsQuestionController', function($scope, $state, $ionicModal, SituationsService, TheoryService) {

    $scope.localData = {};
    $scope.explainings = [];

    $scope.optionsModel = ["a", "b", "c"];
    $scope.localData = SituationsService.get().localData;
    $scope.question = SituationsService.getQuestion($state.params.id);
    $scope.explainings = TheoryService.getSituationsExplanation($state.params.id);

    $scope.pinQuestion = function(item) {
      SituationsService.pinQuestion(item);
    }

    $scope.hideQuestion = function(item) {
      SituationsService.hideQuestion(item);
      $state.go('tabs.questions', {
      });
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
