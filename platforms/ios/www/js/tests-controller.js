angular.module('autoskola')
  .controller('TestsController', function($scope, $state, $http, $ionicModal, TestsService) {

    $scope.tests = [];
    $scope.selectedTest = {};
    $scope.testModal = {};
    $scope.localDataTests = {};

    $scope.tests = TestsList.tests;
    $scope.localDataTests = TestsService.get().localDataTests;

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-test.html', function($ionicModal) {
      $scope.modal = $ionicModal;
      $scope.basicTest = false;
      console.log($scope.basicTest);
    }, {
      scope: $scope,
      animation: 'slide-in-up',
    });

    $scope.runTest = function() {
      $scope.closeTestModal();
      $state.go('test', {
        id: $scope.selectedTest.id,
        immediately: $scope.testModal.resolveImmediately ? true : false
      });
    }

    $scope.openTestModal = function(test) {
      $scope.selectedTest = test;
      $scope.modal.show();
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
