var sys = require("sys");
var my_http = require("http");
var newLocal = 8787;
my_http.createServer(function (request, response) {
    console.log("I am server code....");
    response.writeHeader(200, { "Content-Type": "text/plain" });
    response.write("Hello Friends");
    response.end();
}).listen(newLocal);
console.log("Server running on 8787");
//# sourceMappingURL=server.js.map