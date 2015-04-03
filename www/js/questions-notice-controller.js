angular.module('autoskola')
  .controller('QuestionsNoticeController', function($scope, $http, NoticeService) {

    $scope.data = [];
    $scope.localData = {};

    NoticeService.get().then(function(response) {
      $scope.data = response.data;
      $scope.localData = response.localData;
    });

    $scope.pinQuestion = function(item) {
      NoticeService.pinQuestion(item);
    }

    $scope.hideQuestion = function(item) {
      NoticeService.hideQuestion(item);
    }

  });
