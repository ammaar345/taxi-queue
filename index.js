const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
const taxi = require("./taxi");
let taxiFunction=taxi()
const flash = require('express-flash');
const session = require('express-session');
const pg = require("pg");
// var Chart = require('chart.js');
//  var ctx = 'myChart';
// var ctx = $("#myChart").getContext("2d");

const Pool = pg.Pool;
var beep = require('beepbeep')

const connectionString = process.env.DATABASE_URL || 'postgresql://sneakygoblin:codex123@localhost:5432/greetings_webapp';
const pool = new Pool({
    connectionString
});
//const greet = Greet(pool);
app.use(session({
  secret: "<add a secret string here>",
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts'
}));
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', async function (req, res) {
  beep(3[1000])
  res.render("home", {
   
  })
})

app.post("/taxi-association",  function (req, res) {
 
  res.render("association", {
      age: 93
  })
})
app.post("/availability", function(req,res){
 


res.render("availability",{

})
})
app.post("/checkout", function(req,res){

  res.render("checkout",{
  
  })
  })
app.post("/passenger",  function (req, res) {
   res.render("passenger", {
  
  })
})
const PORT = process.env.PORT || 5801;
app.listen(PORT, function () {

  console.log("App started at port:", PORT);
})