const server = require('./server');

const port = process.env.PORT || 5000;

console.log(`----------http://localhost:${port}----------`);
server.listen(port);
