'use strict';

angular.module('autoskola')
  .service('OverviewService', function($q) {

    var rewards = RewardsList.rewards;
    var law = LawList.law;

    var localDataRewards = {};
    var localDataLaw = {};
    var localDataNotice = {};
    var localDataSigns = {};
    var localDataSituations = {};

    function loadLocalStorageRewards() {
      var storage = localStorage.getItem('rewards');
      if (! storage) {
        localDataRewards = {};
      } else {
        localDataRewards = JSON.parse(storage);
      }
    }

    function loadLocalStorageLaw() {
      var storage = localStorage.getItem('law');
      if (! storage) {
        localDataLaw = {};
      } else {
        localDataLaw = JSON.parse(storage);
      }
    }

    function loadLocalStorageNotice() {
      var storage = localStorage.getItem('notice');
      if (! storage) {
        localDataNotice = {};
      } else {
        localDataNotice = JSON.parse(storage);
      }
    }

    function loadLocalStorageSigns() {
      var storage = localStorage.getItem('signs');
      if (! storage) {
        localDataSigns = {};
      } else {
        localDataSigns = JSON.parse(storage);
      }
    }

    function loadLocalStorageSituations() {
      var storage = localStorage.getItem('situations');
      if (! storage) {
        localDataSituations = {};
      } else {
        localDataSituations = JSON.parse(storage);
      }
    }

    function saveLocalStorageRewards() {
      localStorage.setItem('rewards', JSON.stringify(localDataRewards));
    }

    loadLocalStorageRewards();
    loadLocalStorageLaw();
    loadLocalStorageNotice();
    loadLocalStorageSigns();
    loadLocalStorageSituations();

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
          localDataLaw: localDataLaw,
          localDataNotice: localDataNotice,
          localDataSigns: localDataSigns,
          localDataSituations: localDataSituations,
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
