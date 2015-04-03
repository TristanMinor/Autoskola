'use strict';

angular.module('autoskola')
  .service('SituationsService', function($http, $q) {

    var data = [];
    var localData = {};
    var loaded = false;

    function loadLocalStorage() {
      var storage = localStorage.getItem('situations');
      if (! storage) {
        localData = {};
      } else {
        localData = JSON.parse(storage);
      }
    }

    function saveLocalStorage() {
      localStorage.setItem('situations', JSON.stringify(localData));
    }

    loadLocalStorage();

    return {
      get: function() {
        var deferred = $q.defer();

        if (!loaded) {
          $http.get('json/situations.json').success(function(response) {
            data = response.situations;
            loaded = true;
            deferred.resolve({data:data, localData: localData});
          });
        } else {
          deferred.resolve({data:data, localData: localData});
        }

        return deferred.promise;
      },

      pinQuestion: function(question) {
        if (localData[question.id]) {
          localData[question.id].pinned = !localData[question.id].pinned;
        } else {
          localData[question.id] = {
            pinned: true
          };
        }
        saveLocalStorage();
      },

      hideQuestion: function(question) {
        if (localData[question.id]) {
          localData[question.id].hidden = true;
        } else {
          localData[question.id] = {
            hidden: true
          };
        }
        saveLocalStorage();
      }
    };

  });
