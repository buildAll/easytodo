'use strict';

describe('Directive: goback', function () {

  // load the directive's module
  beforeEach(module('easyToDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<goback></goback>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the goback directive');
  }));
});
