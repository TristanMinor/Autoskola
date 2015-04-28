angular.module('autoskola')
  .controller('QuestionsController', function($scope, $state, $ionicModal) {

    $scope.tabName = 'tab-law';
    $scope.selectedHiddenQuestionsType = {};

    $scope.setTab = function(tab) {
    	$scope.tabName = tab;
    };

    $scope.goToSearch = function() {
      $state.go('search');
    };

    $scope.goToHiddenQuestions = function(type) {
      $scope.selectedHiddenQuestionsType = type;
      console.log($scope.selectedHiddenQuestionsType);
      $state.go('questions-hidden', {
        hiddenquestionstype: $scope.selectedHiddenQuestionsType
      });
    }

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-test.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      // Use the scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation
      animation: 'slide-in-up',
    });

    $scope.runTest = function() {
      $scope.closeTestModal();
    }

    $scope.openTestModal = function() {
      $scope.modal.show();
      basicTest = true;
      console.log(basicTest);
    };

    $scope.closeTestModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.chapter.remove();
      $scope.content.remove();
    });

  });
