/*
 * npm init
 * npm install express --save
 * npm install request --save
 * npm install ejs --save
 *
 * node(mon) index.js
 */

var express = require('express');
var request = require('request');
var path = require('path');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

let data_wifi;

app.get('/',function(req,res){
  res.render('home',{
    wifi: data_wifi
  });
});

app.get('/data',(req,res) => {
  res.render('data');
  });

  app.get('/help',(req,res) => {
    res.render('help');
    });

  app.get('/locaties',(req,res) => {
    res.render('locaties');
    });

    app.get('/instellingen',(req,res) => {
      res.render('instellingen');
      });


    app.get('/navigatie',(req,res) => {
      res.render('navigatie');
      });

      app.get('/aanmelden',(req,res) => {
        res.render('aanmelden');
        });

        app.get('/aanmeldformulier',(req,res) => {
          res.render('aanmeldformulier');
          });

        app.get('/categorie',(req,res) => {
          res.render('categorie');
            });



    app.get('/account',(req,res) => {
      res.render('account');
        });


app.listen(3000, function() {
  console.log('Node luistert op poort 3000');
});

console.log("Webserver draait");



request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/60/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  function(error, response, body){
    data_wifi = JSON.parse(body);
    data_wifi = data_wifi.features;

    for(var i=0; i < data_wifi.length; i++) {
        console.log("naam: " + data_wifi[i].attributes.LOCATIE);
        console.log("naam: " + data_wifi[i].geometry.x);
        console.log("naam: " + data_wifi[i].attributes.STRAAT);
        console.log("naam: " + data_wifi[i].attributes.HUISNR);
        console.log("naam: " + data_wifi[i].attributes.GEMEENTE);



    }

  }
);
