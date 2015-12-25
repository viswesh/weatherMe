'use strict';

/**
 * @ngdoc directive
 * @name weatherMeApp.directive:backImg
 * @description
 * # backImg
 */
angular.module('weatherMeApp')
  .directive('backImg', function () {
    return function(scope, element, attrs){
   		attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')'
            });
        });
    };

  });
