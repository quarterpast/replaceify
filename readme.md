replaceify
================

[browserify](https://github.com/substack/node-browserify) transform to replace paths with strings

install
-------

```
npm install replaceify
```

usage
-----

```javascript
bundle.transform({
  './config.json': env.config
}, replaceify)
```

licence
-------

MIT. &copy; matt brennan