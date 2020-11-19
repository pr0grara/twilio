const http = require("http");
const express = require("express");
const { urlencoded } = require("body-parser");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();
app.use(urlencoded({ extended: false }));
app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  var body = req.body.Body;
  var done = new RegExp('artsakh', 'gi');
  if (body.match(done)) {
    twiml.message("Thank you for being awesome! Your account is now cleared in the system.");
  } else {
    twiml.message('Once you have unblocked your account reply with "Artsakh" (case insensitive)');
  }
  // console.log(req)
  res.writeHead(200, { "Content-Type": "text/xml" });
  // res.send(req)
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log("Express server listening on port 1337");
});
