
const request = require('request');

module.exports = function execute () {
  
  var requestToExecute;
  if(this.proxies[0] !== undefined) {
    console.log('we have a proxy', this.proxies[0]);
    var curProxy = this.proxies[Math.floor(Math.random() * this.proxies.length)]
    requestToExecute = request.defaults({proxy: curProxy});
  }
  else requestToExecute = request.defaults();
  var curURL = this.url;
  requestToExecute.get(curURL, (err, response, body) => {
    if(err) {
      process.send({
        type: 'error',
        error: err,
        url: curURL
      })
      return;
    }
    //push the searchTerm matches in the html to the data array

    this.searchTerms.forEach( (ele) => {
      var matches = body.match(ele);
      delete matches.index;
      delete matches.input;
      console.log('sending message with ', curURL);
      process.send({
        type: 'data',
        data: matches,
        url: curURL,
        proxy: curProxy
      })
    });
    
    return this;
  })
}


  