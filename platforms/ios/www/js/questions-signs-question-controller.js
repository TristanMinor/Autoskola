angular.module('autoskola')
  .controller('QuestionsSignsQuestionController', function($scope, $http, $state) {
    $scope.data = [];

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

  });
