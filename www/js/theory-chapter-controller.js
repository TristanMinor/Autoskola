angular.module('autoskola')
  .controller('TheoryChapterController', function($scope, $http, $state) {
    $scope.data = [];

    // load json from file
    $http.get('json/theory.json').success(function(response) {

      // put content of json file to data variable
      var data = response.theory;
      var chapter = null;

      // One way to do it:

      // for (var i = 0; i < data.length; i++) {
      //   for (var j = 0; j < data[i].chapters.length; j++) {
      //     if (data[i].chapters[j].id == $state.params.id) {
      //       chapter = data[i].chapters[j];
      //       break;
      //     }
      //   }
      // }

      // for each item in theory data
      data.forEach(function(item) {
        // for each chapter in section
        item.chapters.forEach(function(chpt) {
          if (chpt.id == $state.params.id) {
            chapter = chpt;
          }
        });
      });

      $scope.chapter = chapter;

    });

  });
