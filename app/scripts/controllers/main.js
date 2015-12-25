'use strict';

/**
 * @ngdoc function
 * @name weatherMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherMeApp
 */
angular.module('weatherMeApp')
  .controller('MainCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
  	$scope.location="";
  	$scope.weatherData=[];
  	$scope.selectedWeather;

	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position){
	      $scope.$apply(function(){
	        $scope.position = position;
	        displayStreetView();
	        getWeather();
	        getAddress();
	      });
	    });
	  }

	 function displayStreetView() {
	 	$scope.location = $scope.position.coords.latitude + "," + $scope.position.coords.longitude;
	 	$scope.imgUrl = "http://maps.googleapis.com/maps/api/staticmap?center="+$scope.location+"&zoom=13&size=680x600&sensor=false&style=element:geometry.stroke|visibility:off&style=feature:water|saturation:-100|";
	 }

	 function getWeather () {
	 	weatherService.getWeather($scope.location).then(function(data) {
	 		console.log(data);
	 		$scope.weatherData=data.data.forecast.simpleforecast.forecastday;
	 		render();	 		
	 	});
	 }

	 function render() {
	 	$scope.selectedWeather=$scope.weatherData[0];
	 	for (var i = 0; i < $scope.weatherData.length; i++) {
	 		$scope.weatherData[i].selected = false;
	 	}; 
	 	$scope.weatherData[0].selected=true;
	 }

	 function getAddress() {
	 	weatherService.getAddress($scope.location).then(function(data){
	 		console.log(data);
	 		$scope.address = data.data.results[1].formatted_address;
	 	});
	 }

	 $scope.selectWeather = function(weather) {
	 	for (var i = 0; i < $scope.weatherData.length; i++) {
	 		$scope.weatherData[i].selected = false;
	 	}; 
	 	weather.selected = true;
	 	
	 	$scope.selectedWeather = weather;
	 }



  }]);
