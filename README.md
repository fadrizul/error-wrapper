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

