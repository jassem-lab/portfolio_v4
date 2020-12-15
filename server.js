const express = require('express');
const app = express();
const mongoose = require('mongoose');

// general configurations

port = process.env.PORT || 5000 ; 

// Middleware configuration




// Route configuration (APIs) 






// App listeners

app.listen(port, function(){
  console.log(`listenning on port ${port}`);
})