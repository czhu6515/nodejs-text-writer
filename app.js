const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Press Me!</button></input></form></body>')
    res.write('</html>')
    return res.end()
  }
  console.log(req.url, req.method, req.headers)
  
})

server.listen(3200)
