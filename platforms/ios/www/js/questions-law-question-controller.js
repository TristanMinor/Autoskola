angular.module('autoskola')
  .controller('QuestionsLawQuestionController', function($scope, $http, $state, $ionicModal) {
    $scope.data = [];
    $scope.theory = [];


    // load json from file
    $http.get('json/law.json').success(function(response) {
      // put content of json file to data variable
      var data = response.law;
      var question = null;
      // for each qstn in law data
      data.forEach(function(qstn) {
        if (qstn.id == $state.params.id) {
          question = qstn;
        }
      });
      $scope.question = question;
    });

    // filtering theory content by ids from question
    // load theory file
    $http.get('json/theory.json').success(function(response) {
      $scope.theory = response.theory;
      $scope.explainings = [];
      // for each explaining
      $scope.question.explaining.forEach(function(xpln) {
        var content;

        // for each section in theory
        $scope.theory.forEach(function(sctn) {
          // for each selected chapter
          sctn.chapters.forEach(function(chptr) {
            if (xpln.chapter == chptr.id) {
              // console.log('chptr.id', chptr.id);
              //chapter = chptr;
              // for each selected content
              chptr.content.forEach(function(cntnt) {
                if (xpln.content == cntnt.id) {
                  // console.log('cntnt.id', cntnt.id);
                  content = cntnt;
                }
              });
            }
          });
        });
        // Add the right content to explainings
        $scope.explainings.push(content);
        console.log($scope.explainings);
      });
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
      $scope.chapter.remove();
      $scope.content.remove();
    });

  });
