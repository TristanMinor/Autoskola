angular.module('autoskola')
  .controller('QuestionsController', function($scope, $state, $ionicModal) {

    $scope.tabName = 'tab-law';
    $scope.selectedHiddenQuestionsType = {};
    $scope.selectedBasicTestType = {};
    $scope.basicTest = true;
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
      $scope.basicTestType.id = 36;
      $scope.basicTestType.name = "Zákon 1–35";
      $scope.selectedBasicTestType = $scope.basicTestType;
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
          $scope.selectedBasicTestType.name = "Zákon 1–35";
          break;
        case 37:
          $scope.selectedBasicTestType.name = "Zákon 36–70";
          break;
        case 38:
          $scope.selectedBasicTestType.name = "Vyhláška";
          break;
        case 39:
          $scope.selectedBasicTestType.name = "Výstražné značky";
          break;
        case 40:
          $scope.selectedBasicTestType.name = "Značky upravujúce prednosť v jazde";
          break;
        case 41:
          $scope.selectedBasicTestType.name = "Zákazové značky";
          break;
        case 42:
          $scope.selectedBasicTestType.name = "Príkazové značky";
          break;
        case 43:
          $scope.selectedBasicTestType.name = "Informatívne, prevádzkové, smerové a iné značky";
          break;
        case 44:
          $scope.selectedBasicTestType.name = "Informatívne smerové značky";
          break;
        case 45:
          $scope.selectedBasicTestType.name = "Informatívne iné značky";
          break;
        case 46:
          $scope.selectedBasicTestType.name = "Dodatkové tabuľky";
          break;
        case 47:
          $scope.selectedBasicTestType.name = "Vodorovné dopravné značky";
          break;
        case 48:
          $scope.selectedBasicTestType.name = "Dopravné zariadenia a osobitné označenia";
          break;
        case 49:
          $scope.selectedBasicTestType.name = "Križovatky – jazda v jazdných pruhoch";
          break;
        case 50:
          $scope.selectedBasicTestType.name = "Križovatky bez dopravných značiek";
          break;
        case 51:
          $scope.selectedBasicTestType.name = "Križovatky hlavnej cesty s vedľajšou";
          break;
        case 52:
          $scope.selectedBasicTestType.name = "Riadené križovatky";
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
