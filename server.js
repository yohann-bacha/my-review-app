// Node.js - Express sample application

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.write('Hello World!')
  res.write('\nThis is my secure website, yaaay! I am the master now. Pouet. But im a bit tired ngl. Hope it will be fixed soon. I am a fork and a spoon too.')
  res.end()
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
  console.log('Coucou')
  console.log(process.env)
})
