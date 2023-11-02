const http      = require('http');
const httpProxy = require('http-proxy');
const proxy     = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
	console.log("wah!")
  	proxy.web(req, res, { target: "https://openlibrary.org/query?type=/type/edition&authors=/authors/OL1A" });
}).listen(9500, () => {
  console.log("Waiting for requests...");
});