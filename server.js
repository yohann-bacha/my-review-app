// Node.js - Express sample application

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.write('Hello World!')
  res.write(JSON.stringify(process.env))
  res.write("\noh no that is actually really bad\n")
  res.write(JSON.stringify(process.env))
  res.write('This is the end of the world!')
  res.write('(as we know it)')
  res.end()
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
  console.log('Coucou')
  console.log(process.env)
})
