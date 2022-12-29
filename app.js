const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", null, (err, data) => {
    if (err) {
      throw err;
    }
    response.write(data);
    response.end();
  });
});
server.listen(5678, () => {
  console.log("서버 도는 중 5678");
});
