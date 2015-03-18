angular.module('autoskola')
  .controller('QuestionsNoticeController', function($scope, $http) {
    $scope.data = [];

    $http.get('json/notice.json').success(function(response) {
      $scope.data = response.notice;
    });

  });
