angular.module('autoskola')
  .controller('QuestionsSituationsQuestionController', function($scope, $http, $state, $ionicModal) {
    $scope.data = [];

    // load json from file
    $http.get('json/situations.json').success(function(response) {

      // put content of json file to data variable
      var data = response.situations;
      var question = null;

      // for each item in situations data
      data.forEach(function(item) {
        // for each bundle in section
        item.bundles.forEach(function(bndl) {
          //for each question in bundle
          bndl.questions.forEach(function(qstn) {
            if (qstn.id == $state.params.id) {
              question = qstn;
            }
          });
        });
      });

      $scope.question = question;

    });

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/explaining.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      // Use the scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation
      animation: 'slide-in-up'
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

  });