angular.module('autoskola')
  .controller('QuestionsLawQuestionController', function($scope, $http, $state, $ionicModal, LawService, TheoryService) {

    $scope.localData = {};
    $scope.explainings = [];

    $scope.optionsModel = ["a","b","c"];
    $scope.localData = LawService.get().localData;
    $scope.question = LawService.getQuestion($state.params.id);
    $scope.explainings = TheoryService.getLawExplanation($state.params.id);

    $scope.pinQuestion = function(item) {
      LawService.pinQuestion(item);
    }

    $scope.hideQuestion = function(item) {
      LawService.hideQuestion(item);
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
      $scope.chapter.remove();
      $scope.content.remove();
    });



  });
