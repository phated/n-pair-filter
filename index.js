'use strict';

var npair = require('n-pair');

function filterPairs(pairs, cb){
  var filtered = [];

  npair(pairs, function(pair){
    var result = cb(pair);
    if(result){
      filtered.push(pair);
    }
  });

  return filtered;
}

module.exports = filterPairs;
