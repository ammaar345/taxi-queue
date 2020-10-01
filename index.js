const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
// const flash = require('express-flash');
// const session = require('express-session');
const pg = require("pg");
var beep = require('beepbeep')
 const Pool = pg.Pool;
 const connectionString = process.env.DATABASE_URL || 'postgresql://sneakygoblin:codex123@localhost:5432/taxi_queue';
const pool = new Pool({
  connectionString
});
// app.use(session({
//   secret: "<add a secret string here>",
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(flash());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts'
}));
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Taxi = require("./taxi");
const taxi = Taxi();

app.get('/',  function (req, res) {

  res.render("home", {

  })

})

app.post("/taxi-association",async function (req, res) {

  res.render("association", {

  })
})
app.post("/availability", async function (req, res) {
  
  res.render("availability", {

  })
 

})
app.post("/passenger",async function (req, res) {
  var start = req.body.startP || "";
  var end = req.body.endP || "";

  var price= await taxi.whichPrice(start,end)
  res.render("passenger", {
    price
  });

});

app.post("/checkout",async function (req, res) {

  res.render("checkout", {
    price:"0.00"
  })
})
const PORT = process.env.PORT || 2090;
app.listen(PORT, function () {

  console.log("App started at port:", PORT);
})
