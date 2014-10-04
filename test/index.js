'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var beforeEach = lab.beforeEach;
var after = lab.after;
var afterEach = lab.afterEach;
var expect = require('lab').expect;

var filterPairs = require('../');

describe('n-pair-filter', function(){

  describe('returning falsey', function(){

    it('should remove pair', function(done){
      var pairs = filterPairs([[1, 2], [2]], function(pair){
        return false;
      });

      expect(pairs).to.deep.equal([]);
      done();
    });
  });

  describe('returning truthy', function(){

    it('should include pair', function(done){
      var pairs = filterPairs([[1, 2], [2]], function(pair){
        return true;
      });

      expect(pairs).to.deep.equal([[1, 2], [2, 2]]);
      done();
    });
  });
});
