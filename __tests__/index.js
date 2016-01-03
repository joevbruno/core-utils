var expect = require('chai').expect;
var coreUtils = require('../index.js');

var request = function() {};
var API = function() {};
var helper = function() {};

var Us = {
  "request": request,
  "helper": helper
};

describe('core-utils', function() {
  describe('registerUtil', function () {
    it('should add a util', function () {
      expect(coreUtils).to.not.have.property('API');
      coreUI.registerUtil("API", API);
      expect(coreUtils).to.have.property('API');
    });
  });
  describe('registerUtils', function () {
    it('should add multiple utils', function () {
      expect(coreUtils).to.not.have.property('request');
      coreUtils.registerUtils(Us);
      expect(coreUtils).to.have.property('request');
      expect(coreUtils).to.have.property('helpers');
    });
  });
  describe('unregister', function () {
    it('should remove a util', function () {
      expect(coreUtils).to.have.property('request');
      coreUtils.unregisterComponent('request');
      expect(coreUtils).to.not.have.property('request');
    });
  });
  describe('get', function () {
    it('should return all utils', function () {
      var comps = coreUtils.getUtilss();
      expect(comps).to.have.property('API');
    });
  });
});