// Ionic Autoskola App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'autoskola' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('autoskola', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'home.html'
    })

  .state('theory', {
      url: '/theory',
      templateUrl: 'theory.html',
      controller: 'TheoryController'
    })
    .state('chapter', {
      url: '/theory/chapter/:id',
      templateUrl: 'chapter.html',
      controller: 'TheoryChapterController'
    })

  .state('law', {
    url: '/law',
    templateUrl: 'law.html',
    controller: 'LawController'
  })

  .state('notice', {
    url: '/notice',
    templateUrl: 'notice.html',
    controller: 'NoticeController'
  })

  .state('signs', {
    url: '/signs',
    templateUrl: 'signs.html',
    controller: 'SignsController'
  })

  .state('situations', {
    url: '/situations',
    templateUrl: 'situations.html',
    controller: 'SituationsController'
  })

  .state('tests', {
    url: '/tests',
    templateUrl: 'tests.html'
  })

  $urlRouterProvider.otherwise("");

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
