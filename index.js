// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/ping', (req, res) => {
  res.jsonp({ pong: Date.now() })
})

server.post('/httpError', (req, res) => {
  res.status(req.body.errorCode).send(req.body.errorMessage);
})

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use(middlewares)
server.use(router)
server.listen(80, () => {
  console.log('JSON Server is running')
})
