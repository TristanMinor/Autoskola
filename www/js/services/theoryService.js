'use strict';

angular.module('autoskola')
  .service('TheoryService', function($q, $state, LawService) {

    var theoryData = TheoryList.theory;
    var lawData = LawList.law;
    var noticeData = NoticeList.law;
    var signsData = SignsList.law;
    var situationsData = SituationsList.law;

    function searchForChapter(id) {
      var ch;
      theoryData.forEach(function(item) {
        item.chapters.forEach(function(chpt) {
          if (chpt.id == id) {
            ch = chpt;
          }
        });
      });
      return ch;
    }

    function searchForLawExplanation(id) {
        var e;
        var question = LawService.getQuestion($state.params.id);
        var explanations = [];
        // for each explanation
        question.explanation.forEach(function(xpln) {
          // for each section in theory
          theoryData.forEach(function(sctn) {
            // for each selected chapter
            sctn.chapters.forEach(function(chptr) {
              if (xpln.chapter == chptr.id) {
                // for each selected content
                chptr.content.forEach(function(cntnt) {
                  if (xpln.content == cntnt.id) {
                    e = cntnt;
                  }
                });
              }
            });
          });
          // Add the right content to explanations
          explanations.push(e);
        });
      return explanations;
    }

    return {

      get: function() {
        return {
          theoryData: theoryData,
        };
      },

      getChapter: function(id) {
        return searchForChapter(id);
      },

      getLawExplanation: function(id) {
        return searchForLawExplanation(id);
      },

    };
  });
