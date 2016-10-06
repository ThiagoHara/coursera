var http = require('http')
var fs = require('fs')
var path = require('path')

var hostname = 'localhost'
var port = 3000

function res404 (fileUrl,res) {
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end('<html><body><h1>Error 404: ' + fileUrl + ' not a HTML file</h1></body></html>')
}

var server = http.createServer(function (req, res) {
  console.log('Request for ' + req.url + ' by method ' + req.method)
  if (req.method == 'GET') {
    var fileUrl
    if (req.url == '/') fileUrl = '/index.html'
    else fileUrl = req.url
    var filePath = path.resolve('./public' + fileUrl)
    var fileExt = path.extname(filePath)
    if (fileExt == '.html') {
      fs.exists(filePath, function (exists) {
        if (!exists) {
          res404(fileUrl,res)
          return
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(filePath).pipe(res)
      })
    }else {
      res404(fileUrl,res)
    }
  }else {
    res404(req.method,res)
  }
})

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
})
