'use strict';

angular.module('autoskola')
  .service('TestsService', function($q) {

    var tests = TestsList.tests;
    var localDataTests = {};

    function loadLocalStorageTests() {
      var storage = localStorage.getItem('tests');
      if (! storage) {
        localDataTests = {};
      } else {
        localDataTests = JSON.parse(storage);
      }
    }

    function saveLocalStorageTests() {
      localStorage.setItem('tests', JSON.stringify(localDataTests));
    }

    function searchForTest(id) {
      var t;
      tests.forEach(function(test) {
        if (test.id == id) {
          t = test;
        }
      });
      return t;
    }

    loadLocalStorageTests();

    return {
      get: function() {
        return {
          tests: tests,
          localDataTests: localDataTests
        };
      },

      getTest: function(id) {
        return searchForTest(id);
      },

      updateTestScore: function(testId, points) {
        if (localDataTests[testId]) {
          localDataTests[testId].score = points;
        } else {
          localDataTests[testId] = {
            score: points
          };
        }
        saveLocalStorageTests();
      },

    };

  });
