angular.module('autoskola')
  .controller('TheoryController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/theory.json').success(function(response) {
      $scope.data = response.theory;
    });

  });

shake.startWatch(onShake);

function onShake() {
  var element = document.getElementById('shakeData');
  element.innerHTML = 'Its happening!';
  console.log('Hej');
}
