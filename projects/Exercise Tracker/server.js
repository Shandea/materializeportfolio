// Developer James Assisted me with this project and Mr.Valdez assisted in helping reset my Database

// Import express, cors, dotenv file, mongoose and body-parser
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(cors())

// Import Username Schema
const Username = require("./Username");
// Import Exercise Schema
const Exlist = require('./Exercise');
// Connect Mongoose
mongoose.connect(process.env.Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))


// Middleware
app.use((req, res, next) => {
  console.log("method: " + req.method)
  console.log("path: " + req.path)
  console.log("ip: " + req.ip)

  next()
})

// Serve HTML File
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

// Serve Static Assest
app.use(express.static(__dirname + "/public"))


// Username Post Request and save to database
app.post('/api/exercise/new-user', (req, res) => {
  // console.log(req.body)
  let name = new Username(req.body)
  name.save((err, name) => {
    if (err) {
      res.json({
        "message": "Username already exists"
      })
    } else {
      res.json(name)
    }
  })
});

// Exercise Post  Request and save to database
app.post('/api/exercise/add', (req, res) => {
  // Default Date Of Current Day If No Date Is Entered
 if(req.body.date === ""){
   req.body.date = Date.now()
 }


  let Exert = new Exlist({
    userId: req.body.userId,
    description: req.body.description,
    duration: req.body.duration,
    date: req.body.date
  })

  Exert.save((err, Exert) => {
    if (err) {
      res.json(err)
    } else {
      res.json(Exert)
    }
  })
});
// Access User log
app.get("/api/exercise/users", (req,res) => {
  let user = req.query.userId;
  Username.find({userId : user}, (err,data) => {
    if(err) {
      res.json(err)
    }
    else{
      res.json(data)
    }
  })
});
// Getting The Log Of Exercises From Database
app.get("/api/exercise/log", (req,res) => {
  const {userId} = req.query;
  Exlist.find({userId}, (err,data) => {
    let obj ={
      count: data.length,
      userId: data
    }
    if(err){
      res.json(err)
    }
    else{
      res.json(obj)
    }
  })
});

// Requesting Specfic Id And Getting All Data From Specfic Dates
app.get("/api/exercise/otherlog", (req,res) => {
  let user = req.query.userId;

  let fromDate = req.query.from;
  let toDate = req.query.to;

  let parseFromDate = Date.parse(fromDate);
  let parseToDate = Date.parse(toDate);

  Exlist.find({userId : user}, (err,data) => {
    let newData = data.filter(val => {
      if(Date.parse(val.date) >= parseFromDate && Date.parse(val.date) <= parseToDate) {
        return val;
      }
    })
   
    if(err){
      res.json(err)
    }
    else{
      res.json(newData)
    }
  })

})

// Listen on port 3000
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
