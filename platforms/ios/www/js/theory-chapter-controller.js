angular.module('autoskola')
  .controller('TheoryChapterController', function($scope, $state, TheoryService) {

    $scope.data = [];
    $scope.chapter = TheoryService.getChapter($state.params.id);

  });
