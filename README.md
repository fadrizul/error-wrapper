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

Wrap your functions, if there's an error it will print the stack-trace message in your console.


## License

(The MIT License)

Copyright (c) 2011 Fadrizul Hasani, Dusko Jordanovski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
