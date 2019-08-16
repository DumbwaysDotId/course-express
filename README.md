# ORM with Sequelize
Sequelize is an ORM for NodeJS, that can be used on Your server code. ORM will simplify Database Querying, Migration, and Manage Relationship between tables.

## Installation 

1. Sequelize 
```
$ yarn add sequelize
```

2. Migration Tools
```
$ yarn add sequelize-cli
```

3. Init Sequelize on your project
```
$ npx sequelize init
```

4. Add MysQL package
```
$ yarn add mysql2
```

# Getting Started

1. Create database named "course-express"

2. Change the config/config.json file in your project, on development object. Make sure your database config is correct

3. Create Model + Migration for table users & todos (for case study example)
```
$ npx sequelize-cli model:generate --name user --attributes email:string,password:string,name:string

$ npx sequelize-cli model:generate --name todo --attributes title:string,is_done:boolean,created_by:integer
```

4. Setup the migration for relation manually on ./migrations/*create-todo.js

change created_by object manually
```javascript
{
    ...
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
    ...
}    
```

5. Run the migration

```
$ npx sequelize db:migrate
```

6. Create data seed on user and todo

```
$ npx sequelize-cli seed:generate --name demo-user
$ npx sequelize-cli seed:generate --name demo-todo
```
then edit the files as needed

7. Run the seeder

```
$ npx sequelize db:seed:all
```

