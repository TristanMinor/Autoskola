angular.module('autoskola')
  .controller('QuestionsNoticeQuestionController', function($scope, $state, $ionicModal, NoticeService) {

    $scope.localData = {};

    $scope.optionsModel = ["a","b","c"];
    $scope.localData = NoticeService.get().localData;
    $scope.question = NoticeService.getQuestion($state.params.id);

    $scope.pinQuestion = function(item) {
      NoticeService.pinQuestion(item);
    }

    $ionicModal.fromTemplateUrl('templates/modals/modal-explaining.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

  });
