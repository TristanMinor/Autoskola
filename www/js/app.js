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

  .state('tabs.questions', {
    url: '/questions',
    views: {
      'questions-tab': {
        templateUrl: 'questions.html',
        controller: 'QuestionsController',
      }
    }
  })

  .state('tabs.tests', {
    url: '/tests',
    views: {
      'tests-tab': {
        templateUrl: 'tests.html',
        controller: 'TestsController'
      }
    }
  })

  .state('tabs.info', {
    url: '/info',
    views: {
      'info-tab': {
        templateUrl: 'info.html',
        controller: 'InfoController'
      }
    }
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

.directive('asBlockquoteCollapser', function() {
  return {
    link: function(scope, element, attrs) {
      var button, blockquote;

      setTimeout(function() {
        // find button in paragraph
        button = element.find('a');
        // find blockquote in paragraph
        blockquote = element.find('blockquote');
        // on button click
        button.on('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          blockquote.toggleClass('active');
        })
      });

      // prevent memory leak
      scope.$on('$destroy', function() {
        button.off('click');
        button = null;
        blockquote = null;
      });
    }
  }
})
