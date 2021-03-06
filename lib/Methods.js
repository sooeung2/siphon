

const get = require('./methods/get');
const post = require('./methods/post');
const setHeaders = require('./methods/setHeaders');
const find = require('./methods/find');
const retries = require('./methods/retries');
const store = require('./methods/store');
const pushTo = require('./methods/pushTo');
const execute = require('./methods/execute');
const setProxies = require('./methods/setProxies');
const setWorkers = require('./methods/setWorkers');
const setURLs = require('./methods/setURLs');
const run = require('./methods/run');

var methods = { get, post, setHeaders, find, retries, store, pushTo, execute, setProxies, setWorkers, setURLs, run }

module.exports = methods;