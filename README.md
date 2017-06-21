### Typescript dynamic import

I get error `Dynamic import cannot be used when targeting ECMAScript 2015 modules.`
when I try to use dynamic import inside typescript project with `"module": "es2015"`
in configuration. The error message makes it clear that I can't use `import()` with
es modules but it doesn't make sense because `import()` is part of es modules.  

However, it compiles correctly but throw annoing error.

You can check typescript output by running `npm run build-ts`. Compiled files
will be in `build/` folder.
And also you can check that webpack process it correctly by running `npm run build-webpack`
and opening `index.html`
