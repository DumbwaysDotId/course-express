# Group Routes

Group Routes are needed in API development to differentiate a route for API or for standard website link. For example these links:

https://dumbways.id/p/bootcamp
vs
https://dumbways.id/api/v1/bootcamp

Of course you will notice the difference. The first link is a standard link to access a page in a website, while the second link is an API that provide JSON data. So a prefix will be needed in order to differentiate a route in a web app.

If you are not using group routes, You will need to add the prefix in every routes like this:

index.js
```javascript
...

app.get('/api/v1/todos', (req, res) => {
    res.send(todos)
})
    
router.get('/api/v1/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
})

...
```
this is possible, but You will need to type it manually one by one, and its not very effective. So the correct way will be (like in this repo):

- install express-group-routes 
```
$ npm i --save express-group-routes

```
- modify index.js file

index.js
```javascript
...
require('express-group-routes')

...

//use group routes here
app.group("/api/v1", (router) => {
    router.get('/todos', (req, res) => {
        res.send(todos)
    })
    
    router.get('/todo/:id', (req, res) => {
        const id = req.params.id
        const index = id - 1    
        res.send(todos[index])
    })
    
    ...
})

...
```

these way, all of your routes will be grouped and prefixed with /api/v1.

- Then now you can access your endpoint by going to https://localhost:5000/api/v1/todos