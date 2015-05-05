'use strict';

angular.module('autoskola')
  .service('TheoryService', function($q, $state, LawService, NoticeService, SignsService, SituationsService) {

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
        var question = LawService.getQuestion(id);
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

    function searchForNoticeExplanation(id) {
        var e;
        var question = NoticeService.getQuestion(id);
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

    function searchForSignsExplanation(id) {
        var question = SignsService.getQuestion(id);
        var explanations = [];
        // for each explanation
        question.explanation.forEach(function(xpln) {
          explanations.push(xpln);
        });
      return explanations;
    }

    function searchForSituationsExplanation(id) {
        var question = SituationsService.getQuestion(id);
        var explanations = [];
        // for each explanation
        question.explanation.forEach(function(xpln) {
          explanations.push(xpln);
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

      getNoticeExplanation: function(id) {
        return searchForNoticeExplanation(id);
      },

      getSignsExplanation: function(id) {
        return searchForSignsExplanation(id);
      },

      getSituationsExplanation: function(id) {
        return searchForSituationsExplanation(id);
      },

    };
  });
