angular.module('autoskola')
  .controller('TestsController', function($scope, $http, $ionicModal) {
    $scope.tests = [];

    $http.get('json/tests.json').success(function(response) {
      $scope.tests = response.tests;
    });

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-test.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      // Use the scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation
      animation: 'slide-in-up'

    });

    $scope.openTestModal = function() {
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
