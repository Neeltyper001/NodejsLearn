# What are Middlewares in the context of node.js ?
In the context of node.js, middleware refers to a software component that ists between the incoming HTTP request and the corresponding HTTP response. It acts as bridge or intermediary, processing the request before it reaches the final destintation or the next middleware in the chain.

 # What are the use of middleware ?
 Middleware functions in Node.js are commonly used to perform various tasks such as request parsing. authentication, atuthorization, logging, error handling, and more. They provide a modular and reusable way to add functionality to your web application by allowing you to extend or modiy the behavior of the incoming requests and outgoing responses.

 # How they are implemented ?
Middleware functions in Node.js are typically implemented as functions with three parameters: request, response, and next. The requestobject represents the incoming HTTP request, the response object represents the HTTP response that will be sent back, and the nextfunction is a callback that indicates the end of the current middleware and passes control to the next middleware in the chain.

# Sample Code 
 
``` function loggerMiddleware(request, response, next) {
  console.log('Incoming request:', request.url);
  next();
}

// Implementing the middleware in an Express.js application
const express = require('express');
const app = express();

app.use(loggerMiddleware);

// ... define your routes and other middleware

app.listen(3000, () => {
  console.log('Server started on port 3000');
});  
```