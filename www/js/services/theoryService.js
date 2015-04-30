'use strict';

angular.module('autoskola')
  .service('TheoryService', function($http, $q) {

    var data = [];
    var loaded = false;

    return {
      get: function() {
        var deferred = $q.defer();

        if (!loaded) {
          $http.get('json/theory.json').success(function(response) {
            data = response.theory;
            loaded = true;
            deferred.resolve({data:data});
          });
        } else {
          deferred.resolve({data:data});
        }
        return deferred.promise;
      },

    };

  });
