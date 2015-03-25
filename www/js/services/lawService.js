angular.module('autoskola')
  .service('LawService', function($http, $q) {

    var data = [];
    var localData = {};
    var loaded = false;

    function loadLocalStorage() {
      storage = localStorage.getItem('law');
      if (! storage) {
        localData = {};
      } else {
        localData = JSON.parse(storage);
      }
    }

    function saveLocalStorage() {
      localStorage.setItem('law', JSON.stringify(localData));
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

      pinQuestion: function(item) {
        if (localData[item.id]) {
          localData[item.id].starred = !localData[item.id].starred;
        } else {
          localData[item.id] = {
            starred: true
          }
        }
        saveLocalStorage();
      },

      hideQuestion: function(item) {
        if (localData[item.id]) {
          localData[item.id].hidden = true;
        } else {
          localData[item.id] = {
            hidden: true
          }
        }
        saveLocalStorage();
      }
    }

  });