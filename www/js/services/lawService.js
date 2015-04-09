'use strict';

angular.module('autoskola')
  .service('LawService', function($http, $q) {

    var data = [];
    var localData = {};
    var loaded = false;

    function loadLocalStorage() {
      var storage = localStorage.getItem('law');
      if (! storage) {
        localData = {};
      } else {
        localData = JSON.parse(storage);
      }
    }

    function saveLocalStorage() {
      localStorage.setItem('law', JSON.stringify(localData));
    }

    function searchForQuestion(id) {
      var q;
      console.log('searchibng', id);
      data.forEach(function(question) {
        if (question.id == id) {
          q = question;
        }
      });
      return q;
    }

    loadLocalStorage();

    return {
      get: function() {
        var deferred = $q.defer();

        if (!loaded) {
          $http.get('json/law.json').success(function(response) {
            data = response.law;
            loaded = true;
            deferred.resolve({data:data, localData: localData});
          });
        } else {
          deferred.resolve({data:data, localData: localData});
        }

        return deferred.promise;
      },

      getQuestion: function(id) {
        var deferred = $q.defer();
        var q;

        if (!loaded) {
          $http.get('json/law.json').success(function(response) {
            data = response.law;
            loaded = true;
            q = searchForQuestion(id);
            deferred.resolve(q);
          });
        } else {
          q = searchForQuestion(id);
          deferred.resolve(q);
        }

        return deferred.promise;
      },

      pinQuestion: function(item) {
        if (localData[item.id]) {
          localData[item.id].pinned = !localData[item.id].pinned;
        } else {
          localData[item.id] = {
            pinned: true
          };
        }
        saveLocalStorage();
      },

      hideQuestion: function(item) {
        if (localData[item.id]) {
          localData[item.id].hidden = true;
        } else {
          localData[item.id] = {
            hidden: true
          };
        }
        saveLocalStorage();
      }
    };

  });
