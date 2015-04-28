angular.module('autoskola')
  .controller('QuestionsSignsQuestionController', function($scope, $http, $state, $ionicModal, SignsService) {

    $scope.data = [];
    $scope.localData = {};
    $scope.optionsModel = ["a","b","c"];

    SignsService.get().then(function(response) {
      $scope.data = response.data;
      $scope.localData = response.localData;
    });

    // load json from file
    $http.get('json/signs.json').success(function(response) {

      // put content of json file to data variable
      var data = response.signs;
      var question = null;

      data.forEach(function(item) {

        // for each item in law data
        item.questions.forEach(function(qstn) {
          if (qstn.id == $state.params.id) {
            question = qstn;
          }
        });

      });

      $scope.question = question;

    });

    $scope.pinQuestion = function(item) {
      SignsService.pinQuestion(item);
    }

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modals/modal-explaining.html', function($ionicModal) {
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
