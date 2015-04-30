'use strict';

angular.module('autoskola')
  .service('TestsService', function($q) {

    var tests = TestsList.tests;

    function searchForTest(id) {
      var t;
      tests.forEach(function(test) {
        if (test.id == id) {
          t = test;
        }
      });
      return t;
    }

    return {
      get: function() {
        return {
          tests: tests,
        };
      },

      getTest: function(id) {
        return searchForTest(id);
      },

    };

  });
