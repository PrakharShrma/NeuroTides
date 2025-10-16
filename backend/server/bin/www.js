const app = require('../app')
const http = require('http')
const mongoose = require('mongoose');
const express = require('express')
const path = require('path');

mongoose.set('strictQuery', true) 
// replace <dbuser> and <dbpassword> with your MongoDB Atlas database user credentials
const uri = '//your url';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.log('Error connecting to MongoDB Atlas:', error);
});


app.use(express.static(path.join(__dirname, '../../../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
});

const port = 8000
app.set('port',port)

const server = http.createServer(app)



server.listen(port,()=>{
  console.log("App is running on port",port)
})

