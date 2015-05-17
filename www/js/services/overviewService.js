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

    loadLocalStorageRewards();

    function countLawPercentage() {
      var lawQuestionsQty = law.length;
      var lawQuestionsHiddenQty = 0;
      var LawPercentage;

      // console.log(localDataLaw);
      // console.log(lawQuestionsQty);
      // console.log(lawQuestionsHiddenQty);
    }

    countLawPercentage();

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
