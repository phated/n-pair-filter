'use strict';

var npair = require('n-pair');

function filterPairs(sets, cb){
  var filtered = [];

  npair(sets, function(pair){
    var result = cb(pair);
    if(result){
      filtered.push(pair);
    }
  });

  return filtered;
}

module.exports = filterPairs;
