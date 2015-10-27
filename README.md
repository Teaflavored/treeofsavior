# Tree Of Savior

Visit the current build on [Heroku](https://treeofsavior.herokuapp.com/). This project aims to use [Universal Javascript](https://github.com/facebook/react/pull/4041)

##Quick Setup guide

- install the latest version of node at the [Node JS website](http://nodejs.org/en/)
- install the latest version of mongodb at [Mongodb website](https://www.mongodb.org/)
- clone the repo to your local box ``git clone https://github.com/Teaflavored/treeofsavior``
- navigate to the repo ``cd treeofsavior`` and run ``npm install```
- create a ``.env`` file in the treeofsavior directory and copy paste the following environment variables

    ``  DB_URL = mongodb://localhost/treeofsavior
        DB_RETRIES = 5
        SESSION_SECRET = WeloveTreeofSavior
        BASE_URL=http://localhost:3000``
      
- in a separate terminal, start up the mongo server by running ``mongod``, *Note: You may need permission to run this
- in another separate terminal, start up the webpack dev server by running ``npm run dev-watch``
- run ``npm run dev`` to build your bundle and start up your local server
- navigate to ``localhost:3000`` to view the app
- open a second browser window to point to ``localhost:3001`` for live editing of JSX components
