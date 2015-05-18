'use strict';

angular.module('autoskola')
  .service('OverviewService', function($q) {

    var rewards = RewardsList.rewards;
    var law = LawList.law;

    var localDataRewards = {};

    function loadLocalStorageRewards() {
      var storage = localStorage.getItem('rewards');
      if (! storage) {
        localDataRewards = {};
      } else {
        localDataRewards = JSON.parse(storage);
      }
    }

    function saveLocalStorageRewards() {
      localStorage.setItem('rewards', JSON.stringify(localDataRewards));
    }

    function unlockRewards() {
      localDataRewards[1] = {
        unlocked: true
      }
      localDataRewards[3] = {
        unlocked: true
      }
      localDataRewards[5] = {
        unlocked: true
      }
      localDataRewards[6] = {
        unlocked: true
      }
      localDataRewards[8] = {
        unlocked: true
      }
      localDataRewards[11] = {
        unlocked: true
      }
      localDataRewards[13] = {
        unlocked: true
      }
      localDataRewards[14] = {
        unlocked: true
      }
      localDataRewards[15] = {
        unlocked: true
      }
      localDataRewards[16] = {
        unlocked: true
      }
    }

    loadLocalStorageRewards();
    unlockRewards();

    return {
      get: function() {
        return {
          rewards: rewards,
          localDataRewards: localDataRewards,
        };
      },

      unlockReward: function(reward) {
        if (localDataRewards[reward.id]) {
          localDataRewards[reward.id].unlocked = !localDataRewards[reward.id].unlocked;
        } else {
          localDataRewards[reward.id] = {
            unlocked: true
          };
        }
        saveLocalStorageRewards();
      }

    };

  });
