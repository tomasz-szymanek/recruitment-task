# recruitment-task
Simple node.js API for the rectruiment task

Create frontend todo list using tools of your choice and this API.

Configure MongoDB:
1. Install MongoDB.
2. 
```
mkdir -p ./data/db
mongod --dbpath ./data/db
```

Install:
```
npm install
```

Start:
```
npm start
```

| METHOD | URL   | Example of JSON body                                                      | What it does                       |   |
|--------|-------|---------------------------------------------------------------------------|------------------------------------|---|
| GET    | /todo | -                                                                         | Returns list of all todos.         |   |
| POST   | /todo | {   "value": "title of the todo",   "done": true }                        | Creates new todo, returns it's id. |   |
| DELETE | /todo | { "id": "592d21fb3f0d452475f356cb" }                                      | Deletes todo.                      |   |
| PUT    | todo  | {"id": "592d21fb3f0d452475f356cb","value": "new todo title","done": true} | Updates todo.                      |   |
