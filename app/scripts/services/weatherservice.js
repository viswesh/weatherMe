'use strict';

/**
 * @ngdoc service
 * @name weatherMeApp.weatherService
 * @description
 * # weatherService
 * Service in the weatherMeApp.
 */
angular.module('weatherMeApp')
  .service('weatherService', ['$http', function ($http) {  	 
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = this; 
    service.getWeather = function(position) {
    	return $http.get('http://api.wunderground.com/api/4aefe1e5e3afb170/forecast10day/q/'+position+'.json');
    	// return $http.get('../data/data.json');
    }

    service.getAddress = function(position){
    	return $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+position+'&sensor=true');
    }
  }]);
