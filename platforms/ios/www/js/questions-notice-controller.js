angular.module('autoskola')
  .controller('QuestionsNoticeController', function($scope, NoticeService) {

    $scope.data = [];
    $scope.localData = {};

    $scope.data = NoticeService.get().data;
    $scope.localData = NoticeService.get().localData;

    $scope.pinQuestion = function(item) {
      NoticeService.pinQuestion(item);
    }

    $scope.hideQuestion = function(item) {
      NoticeService.hideQuestion(item);
    }

    $scope.unhideQuestion = function(item) {
      NoticeService.unhideQuestion(item);
    }

  });
