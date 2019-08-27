# Hello Express

In this section, You will learn how to make a hello world app with express. To make something similar with this repository, follow these steps:
- install express and save its information on package.json (automatically with --save flag)
```
$ npm install --save express
```
- create the index.js file, and type this code
```javascript
//instantiate express module
const express = require('express')
//use express in app variable
const app = express()
//define the server port
const port = 5000

//create the homepage route
app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Hello Express!')
})    

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
```
- run the express app
```
$ node index.js
```
- open your browser at http://localhost:5000
- You will see "Hello Express!" printed on your browser