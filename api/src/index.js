const { feathers } = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const configuration = require('@feathersjs/configuration');

const app = express(feathers());

app.configure(configuration());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());

app.use('/', express.static('./public'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'FeathersJS API is running' });
});

app.use(express.errorHandler());

const port = app.get('port') || 3030;
const server = app.listen(port);

server.on('listening', () => {
  console.log(`🚀 FeathersJS API started on http://localhost:${port}`);
});

module.exports = app;