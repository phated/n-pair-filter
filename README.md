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

## API

### `filterPairs(sets, cb)`

Pair each array in the array sets together in all the possible combinations, calling cb(pair) with each possible pairing and removing any results `cb` returns falsey for from the returned result.

## License

MIT
