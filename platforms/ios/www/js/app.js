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
        templateUrl: 'templates/theory.html',
        controller: 'TheoryController'
      }
    }
  })

  .state('chapter', {
    url: '/tabs/theory/chapter/:id',
    templateUrl: 'templates/chapter.html',
    controller: 'TheoryChapterController'
  })

  .state('tabs.questions', {
    url: '/questions',
    views: {
      'questions-tab': {
        templateUrl: 'templates/questions.html',
        controller: 'QuestionsController'
      }
    }
  })

  .state('question-law', {
    url: '/questions/law/:id',
    templateUrl: 'templates/question.html',
    controller: 'QuestionsLawQuestionController'
  })

  .state('question-notice', {
    url: '/questions/notice/:id',
    templateUrl: 'templates/question.html',
    controller: 'QuestionsNoticeQuestionController'
  })

  .state('question-sign', {
    url: '/questions/sign/:id',
    templateUrl: 'templates/question-sign.html',
    controller: 'QuestionsSignsQuestionController'
  })

  .state('question-situation', {
    url: '/questions/situation/:id',
    templateUrl: 'templates/question-situation.html',
    controller: 'QuestionsSituationsQuestionController'
  })

  .state('tabs.tests', {
    url: '/tests',
    views: {
      'tests-tab': {
        templateUrl: 'templates/tests.html',
        controller: 'TestsController'
      }
    }
  })

  .state('tabs.info', {
    url: '/info',
    views: {
      'info-tab': {
        templateUrl: 'templates/info.html',
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
