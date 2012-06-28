# Stupidly simple Error-Wrapper
Turns your code from this:

```
  db.get('something', function (err, things) {
    if (err) {
      console.log(err);
    } else {
      console.log(things);
    }
  });
```

To this!

```
  db.get('something', wrap(function(things) { console.log(things); }));
```

Or

```
  db.get "something", (err, things) ->
    if err?
      console.log err
    else
      console.log things
```

To this!!

```
  db.get "something", wrap (things) ->
    console.log things
```

## Usage

Include in the file and you're done!

```
var wrap = require('error-wrapper');
```

## What it does?

Wrap your functions, if there's an error it will pring the stack-trace message in your console.
