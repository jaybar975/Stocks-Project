// ./server.js
const stockData = require('./stock.json');
const Pusher = require('pusher');


var pusher = new Pusher({
  appId: 'APP_ID',
  key: 'APP_KEY',
  secret: 'APP_SECRET',
  cluster: 'APP_CLUSTER',
  encrypted: true
});
// ./server.js
let i = 0;
setInterval(() => {
    const GOOG = stockData[1]['Trades'][i];
    pusher.trigger('Trades', 'stock', GOOG);
    i++;
  }, 2000);
