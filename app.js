const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome To Our Page");
  }
  if (req.url === "/about") {
    res.end("Welcome To About Page");
  }
  res.end(`<h1>Oops!</h1>
  <p>The Page Not Found</p>
  <a htef="/">Back To Home Page</a>`);
});

server.listen(5000);
