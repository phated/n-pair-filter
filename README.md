n-pair-filter
=============

Filter generated pairings for n-many sets

## Usage

```js
var filterPairs = require('n-pair-filter');

var pairs = filterPairs([[1, 2], [2]], function(pair){
  return pair.indexOf(1) === -1;
});

console.log(pairs);
// [ [ 2, 2 ] ]
```
