angular.module('autoskola')
  .controller('QuestionsSituationsQuestionController', function($scope, $state, $ionicModal, SituationsService) {

    $scope.data = [];
    $scope.localData = {};
    $scope.explainings = [];
    $scope.optionsModel = ["a", "b", "c"];

    $scope.localData = SituationsService.get().localData;

    // put content of js file to data variable
    var data = SituationsList.situations;
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

    // for each explaining
    $scope.question.explaining.forEach(function(xpln) {
        // Add the content to explainings
        $scope.explainings.push(xpln);
        console.log($scope.explainings);
    });

    $scope.pinQuestion = function(item) {
      SituationsService.pinQuestion(item);
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
