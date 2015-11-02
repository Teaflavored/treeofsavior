# Tree Of Savior

Visit the current build on [Heroku](https://treeofsavior.herokuapp.com/). This project aims to use [Universal Javascript](https://github.com/facebook/react/pull/4041)

##Quick Setup guide

- install the latest version of node at the [Node JS website](http://nodejs.org/en/)
- install the latest version of mongodb at [Mongodb website](https://www.mongodb.org/)
- clone the repo to your local box ``git clone https://github.com/Teaflavored/treeofsavior``
- navigate to the repo ``cd treeofsavior`` and run ``npm install```
- create a ``.env`` file in the treeofsavior directory and copy paste the following environment variables

```
    DB_URL = mongodb://localhost/treeofsavior
    DB_RETRIES = 5
    SESSION_SECRET = WeloveTreeofSavior
    BASE_URL = http://localhost:3000
    NODE_ENV = development
```

- in a separate terminal, start up the mongo server by running ``mongod``, *Note: You may need permission to run this
- run ``npm run dev`` to build your bundle and start up your local server
- navigate to ``localhost:3000`` to view the app
