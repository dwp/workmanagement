const express = require('express')
const router = express.Router()
const v6Data = require('./data/v6-data')
const v7Data = require('./data/v7-data')
const v8Data = require('./data/v8-data')
const v9Data = require('./data/v9-data-2')

// Add your routes here - above the module.exports line

// Deal with query strings

router.use(function(req, res, next){

  Object.assign(res.locals,{
    postData: (req.body ? req.body : false)
  });

  Object.assign(res.locals,{
    getData: (req.query ? req.query : false)
  });

  next();
});

// Includes
require('./routes/v5.js')(router);
require('./routes/v6.js')(router, v6Data);
require('./routes/v7.js')(router, v7Data);
require('./routes/v8.js')(router, v8Data);
require('./routes/v9.js')(router, v9Data);

// Clear data on the index screen

router.get('/clear', function (req, res) {
  req.session.destroy()
  res.render('index')
})

module.exports = router