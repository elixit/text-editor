const path = require('path');
// using a client/dist folder, so the bundles need to be under it
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
