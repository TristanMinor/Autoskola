'use strict';

angular.module('autoskola')
  .service('OverviewService', function($http, $q) {

    var rewards = [];
    var localData = {};
    var loaded = false;

    function loadLocalStorage() {
      var storage = localStorage.getItem('rewards');
      if (! storage) {
        localData = {};
      } else {
        localData = JSON.parse(storage);
      }
    }

    function saveLocalStorage() {
      localStorage.setItem('rewards', JSON.stringify(localData));
    }

    loadLocalStorage();

    return {
      get: function() {
        var deferred = $q.defer();

        if (!loaded) {
          $http.get('json/rewards.json').success(function(response) {
            rewards = response.rewards;
            loaded = true;
            deferred.resolve({rewards:rewards, localData: localData});
          });
        } else {
          deferred.resolve({rewards:rewards, localData: localData});
        }

        return deferred.promise;
      },

      unlockReward: function(reward) {
        if (localData[reward.id]) {
          localData[reward.id].unlocked = !localData[reward.id].unlocked;
        } else {
          localData[reward.id] = {
            unlocked: true
          };
        }        
        saveLocalStorage();
      }

    };

  });
