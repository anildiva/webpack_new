const path = require('path');
module.exports = { entry: ['./src/js/app.js'], output: { path: path.resolve('', './dist/js'), filename: 'bundle.js' } }