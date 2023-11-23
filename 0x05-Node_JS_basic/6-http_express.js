const { express } = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.status(202);
  response.setHeader('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
