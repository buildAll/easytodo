'use strict';

describe('Service: dataPool', function () {

  // load the service's module
  beforeEach(module('easyToDoApp'));

  // instantiate service
  var dataPool;
  beforeEach(inject(function (_dataPool_) {
    dataPool = _dataPool_;
  }));

  it('should do something', function () {
    expect(!!dataPool).toBe(true);
  });

});
