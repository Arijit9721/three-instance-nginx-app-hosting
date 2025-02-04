// important variables
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// accessing the enviroment variables from the docker compose file
const replicaApp = process.env.APP_NAME
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the HTML file
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
    console.log(`Request started from ${replicaApp}`);
    
});

// listen on the port
app.listen(port, ()=>{
    console.log(`${replicaApp} is running at http://localhost:${port}`);
});