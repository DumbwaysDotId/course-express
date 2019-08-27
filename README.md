# Autoreload with Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes. To install it, from your terminal run:

```
$ npm i -g nodemon
```

Then You can run Your app using

```
$ nodemon index.js
```

or, create a script in package.json at "scripts" section

```json
...
"scripts": {
    "start": "nodemon index.js",
    ...
},
...
```

then You can run your app via

```
$ npm start
```

this is most recommended way, instead hardcoded nodemon on every development start