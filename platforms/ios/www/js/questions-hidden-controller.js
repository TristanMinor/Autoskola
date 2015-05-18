angular.module('autoskola')
  .controller('QuestionsHiddenController', function($scope, $state, LawService, NoticeService, SignsService, SituationsService) {

    $scope.params = $state.params;
    // selectedLocalData = [];
    // $scope.localDataLaw = LawService.get().localData;
    // $scope.localDataNotice = NoticeService.get().localData;
    // $scope.localDataSigns = SignsService.get().localData;
    // $scope.localDataSituations = SituationsService.get().localData;
    //
    // $scope.unhideAllQuestions = function(type) {
    //   switch (type) {
    //     case 'law':
    //       console.log($scope.localDataLaw);
    //       $scope.selectedLocalData = $scope.localDataLaw;
    //       $scope.selectedLocalData.forEach(function(qstn) {
    //         LawService.unhideQuestion(qstn);
    //       });
    //       break;
    //     case 'notice':
    //       $scope.selectedLocalData = $scope.localDataNotice;
    //       SelectedService = NoticeService;
    //       break;
    //     case 'signs':
    //       $scope.selectedLocalData = $scope.localDataSigns;
    //       SelectedService = SignsService;
    //       break;
    //     case 'situations':
    //       $scope.selectedLocalData = $scope.localDataSituations;
    //       SelectedService = SituationsService;
    //       break;
    //   }
    //
    // }

  });
