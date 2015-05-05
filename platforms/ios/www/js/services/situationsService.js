'use strict';

angular.module('autoskola')
  .service('SituationsService', function($q) {

    var data = SituationsList.situations;
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

    function searchForQuestion(id) {
      var q;
      data.forEach(function(item) {
        item.bundles.forEach(function(bndl) {
          bndl.questions.forEach(function(qstn) {
            if (qstn.id == id) {
              q = qstn;
            }
          });
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
