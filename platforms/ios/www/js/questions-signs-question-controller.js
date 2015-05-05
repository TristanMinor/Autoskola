angular.module('autoskola')
  .controller('QuestionsSignsQuestionController', function($scope, $state, $ionicModal, SignsService, TheoryService) {

    $scope.localData = {};
    $scope.explainings = [];

    $scope.optionsModel = ["a","b","c"];
    $scope.localData = SignsService.get().localData;
    $scope.question = SignsService.getQuestion($state.params.id);
    $scope.explainings = TheoryService.getSignsExplanation($state.params.id);

    $scope.pinQuestion = function(item) {
      SignsService.pinQuestion(item);
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

  });
