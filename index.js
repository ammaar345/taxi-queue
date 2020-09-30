const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
//const Greet = require("./greet");
const flash = require('express-flash');
const session = require('express-session');
const pg = require("pg");
var beep = require('beepbeep')
const Pool = pg.Pool;
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
app.get('/',  function (req, res) {  
  beep(3,[1000])
  // new Beep(22050).play(1000, 1, [Beep.utils.amplify(8000)]);
  res.render("home", {
   
  })
})

app.post("/taxi-association",  function (req, res) {



  res.render("association", {
    
  })
})
app.post("/checkout", function (req,res)
{
res.render("checkout",{

})


})

app.post("/availability", function(req,res){

res.render("availability",{

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