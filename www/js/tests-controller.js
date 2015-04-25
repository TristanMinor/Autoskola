angular.module('autoskola')
  .controller('TestsController', function($scope, $state, $http, $ionicModal) {
    $scope.tests = [];

    $http.get('json/tests.json').success(function(response) {
      $scope.tests = response.tests;
    });

    $scope.selectedTest = {};
    $scope.testModal = {};

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-test.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up',
      basicTest: false
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
