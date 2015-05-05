angular.module('autoskola')
  .controller('TheoryController', function($scope, $state, TheoryService) {

    $scope.data = [];

    $scope.data = TheoryService.get().theoryData;

    $scope.goToSearch = function() {
      $state.go('search');
    };

  });



shake.startWatch(onShake);

function onShake() {
  var element = document.getElementById('shakeData');
  element.innerHTML = 'Its happening!';
  console.log('Hej');
}
