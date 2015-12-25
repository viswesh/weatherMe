'use strict';

describe('Service: weatherservice', function () {

  // load the service's module
  beforeEach(module('weatherMeApp'));

  // instantiate service
  var weatherservice;
  beforeEach(inject(function (_weatherservice_) {
    weatherservice = _weatherservice_;
  }));


});
