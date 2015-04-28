'use strict';

angular.module('autoskola')
  .service('NoticeService', function($http, $q) {

    var data = [];
    var localData = {};
    var loaded = false;

    function loadLocalStorage() {
      var storage = localStorage.getItem('notice');
      if (! storage) {
        localData = {};
      } else {
        localData = JSON.parse(storage);
      }
    }

    function saveLocalStorage() {
      localStorage.setItem('notice', JSON.stringify(localData));
    }

    loadLocalStorage();

    return {
      get: function() {
        var deferred = $q.defer();

        if (!loaded) {
          $http.get('json/notice.json').success(function(response) {
            data = response.notice;
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
      },

      unhideQuestion: function(item) {
        if (localData[item.id]) {
          localData[item.id].hidden = false;
        } else {
          localData[item.id] = {
            hidden: false
          };
        }
        saveLocalStorage();
      }

    };

  });
