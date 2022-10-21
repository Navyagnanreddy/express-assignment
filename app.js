const express = require('express');
const app= express();
const server = require('http').createServer(app);









server.listen(5000,()=>{console.log("server started at port 5000");});