angular.module('autoskola')
  .controller('QuestionsController', function($scope, $state, $ionicModal) {

    $scope.tabName = 'tab-law';
    $scope.selectedHiddenQuestionsType = {};
    $scope.selectedBasicTestType = {};
    $scope.basicTestType = {};

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
      $scope.basicTest = true;
    }, {
      scope: $scope,
      animation: 'slide-in-up',
    });

    $scope.runTest = function() {
      $scope.closeTestModal();
      console.log($scope.selectedBasicTestType.name)
      $state.go('test', {
        id: $scope.selectedBasicTestType.id,
        testname: $scope.selectedBasicTestType.name,
        immediately: true
      });
    }

    $scope.openTestModal = function() {
      $scope.modal.show();
    };

    $scope.closeTestModal = function() {
      $scope.modal.hide();
    };

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-testtype.html', function($ionicModal) {
      $scope.modal.testtype = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up',
    });

    $scope.openTestTypeModal = function() {
      $scope.modal.testtype.show();
    };

    $scope.closeTestTypeModal = function() {
      $scope.modal.testtype.hide();
    };

    $scope.confirmTestTypeModal = function(basicTestType) {
      $scope.selectedBasicTestType = basicTestType;
      $scope.modal.testtype.hide();
      switch ($scope.selectedBasicTestType.id) {
        case 36:
          $scope.selectedBasicTestType.name = "Zákon";
          break;
        case 37:
          $scope.selectedBasicTestType.name = "Vyhláška";
          break;
        case 38:
          $scope.selectedBasicTestType.name = "Značky";
          break;
        case 39:
          $scope.selectedBasicTestType.name = "Križovatky";
          break;
      }
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      $scope.modal.testype.remove();
      $scope.content.remove();
    });

  });
