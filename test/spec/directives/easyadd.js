'use strict';

describe('Directive: easyAdd', function () {

  // load the directive's module
  beforeEach(module('easyToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<easy-add></easy-add>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the easyAdd directive');
  }));
});
