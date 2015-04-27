angular.module('autoskola')
  .controller('TestsController', function($scope, $state, $http, $ionicModal) {

    $scope.tests = [];
    $scope.selectedTest = {};
    $scope.testModal = {};

    $http.get('json/tests.json').success(function(response) {
      $scope.tests = response.tests;
    });

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-test.html', function($ionicModal) {
      $scope.modal = $ionicModal;
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
      basicTest = false;
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
