#API

This folder contains the api endpoints that will return the requested data. The base url for all endpoints defined here is /api

The server will register these api endpoints by calling the core function with an instance of express router, it is up to each individual service to map HTTP methods and url to data calls. Each service will contain methods that correspond to one of the HTTP methods (GET, POST, PUT, DELETE). The exact endpoint url can differ for a service. (ex: users service can contain /users to query for all users and /users/:id to query for a particular user)

Example users service

    /* File Structure */
    
    --users
        --findUser.js
        --getUsers.js
        --createUser.js
        --deleteUser.js
        --index.js

##Service calls

The ``index.js`` file for each service will export a callback that takes in the express router instance and maps url to data calls.
Each data call file will export a function that will be passed the request and response objects

    (req, res) => {
        //resolve data and send to response
        
        /* 
            if error occurs, set status of response with res.status(422)
            and send back a response with an object with error field
            res.send( { error: "Some error has occur" } )
         
    }

##Request cookies

Since this is an universal app, calls to our api can occur both on the node server as well as the client. Since we are using [fetch](https://github.com/matthew-andrews/isomorphic-fetch), we have to be mindful of the request headers that will be set. To maintain all request cookies, on the client, fetch options must include `` credentials: true ``; On the server, fetch options must pass the cookies as a header `` Cookie : foo=bar;bar=foo ``.
