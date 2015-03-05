// Ionic Autoskola App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'autoskola' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('autoskola', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tabs.theory', {
    url: '/theory',
    views: {
      'theory-tab': {
        templateUrl: 'theory.html',
        controller: 'TheoryController'
      }
    }
  })

  .state('chapter', {
    url: '/theory/chapter/:id',
    templateUrl: 'chapter.html',
    controller: 'TheoryChapterController'
  })

  .state('tabs.law', {
    url: '/law',
    views: {
      'law-tab': {
        templateUrl: 'law.html',
        controller: 'LawController'
      }
    }
  })

  .state('tabs.notice', {
    url: '/notice',
    views: {
      'notice-tab': {
        templateUrl: 'notice.html',
        controller: 'NoticeController'
      }
    }
  })

  .state('tabs.signs', {
    url: '/signs',
    views:{
      'signs-tab': {
        templateUrl: 'signs.html',
        controller: 'SignsController'
      }
    }
  })

  .state('tabs.situations', {
    url: '/situations',
    views: {
      'situations-tab':{
        templateUrl: 'situations.html',
        controller: 'SituationsController'
      }
    }
  })

  .state('tests', {
    url: '/tests',
    templateUrl: 'tests.html'
  })

  $urlRouterProvider.otherwise("tabs/theory");

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
