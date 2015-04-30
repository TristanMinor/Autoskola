'use strict';

angular.module('autoskola')
  .service('SignsService', function($q) {

    var data = SignsList.signs;
    var localData = {};
    var loaded = false;

    function loadLocalStorage() {
      var storage = localStorage.getItem('signs');
      if (! storage) {
        localData = {};
      } else {
        localData = JSON.parse(storage);
      }
    }

    function saveLocalStorage() {
      localStorage.setItem('signs', JSON.stringify(localData));
    }

    function searchForQuestion(id) {
      var q;
      data.forEach(function(item) {
        item.questions.forEach(function(question) {
          if (question.id == id) {
            q = question;
          }
        });
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
      },

      unhideQuestion: function(question) {
        if (localData[question.id]) {
          localData[question.id].hidden = false;
        } else {
          localData[question.id] = {
            hidden: false
          };
        }
        saveLocalStorage();
      }

    };

  });
