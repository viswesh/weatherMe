'use strict';

/**
 * @ngdoc filter
 * @name weatherMeApp.filter:dateformat
 * @function
 * @description
 * # dateformat
 * Filter in the weatherMeApp.
 */
angular.module('weatherMeApp')
  .filter('dateformat', ['$filter',function ($filter) {
    return function(input) {
	  if(input == null){ return ""; } 
	 
	  var _date = $filter('date')(new Date(input*1000), 'MMM dd yyyy');
	 
	  return _date.toUpperCase();

	 };
  }]);
