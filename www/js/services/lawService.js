'use strict';

angular.module('autoskola')
  .service('LawService', function($q) {

    var data = LawList.law;
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
        return {
          data: data,
          localData: localData
        };
      },

      getQuestion: function(id) {
        return searchForQuestion(id);
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
