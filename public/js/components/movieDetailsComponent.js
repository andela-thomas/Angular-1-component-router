(function () {
  'use strict';

  /**
   * Get the component module and name it movieDetails
   */

  var details = angular.module('scotch.components');

  /**
   * Register movieDetails component
   */

  details.component('movieDetails', {
    templateUrl: '/js/components/movieDetailsComponent.html',
    controller: ['$http', MovieDetailsController]
  });

  /**
   * This is the controller for movieDetails component
   */

  function MovieDetailsController($http) {

    var self = this;

    /**
     * Lets get the id params from previous route
     * Get the movie from the server
     */

    self.$onInit = function () {
      return $http.get('api/movies/1')
        .then(function (response) {
          self.movie = response.data;
        });
    };
  }


})();
