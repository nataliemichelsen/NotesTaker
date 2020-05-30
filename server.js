// dependencies 
const express = require( 'express' );
const path = require( 'path' );

// const fs & require fs
const app = express();
let PORT = process.env.PORT || 3000;

// set express middleware
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(express.static( 'Develop/public' ));

// require routes
require( "./Develop/routes/apiRoutes" )(app);
require( "./Develop/routes/htmlRoutes" )(app);

// listen for port
app.listen(PORT, function(){
    console.log( "listening on PORT " + PORT )
});