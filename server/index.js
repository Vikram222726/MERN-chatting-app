const express = require("express");
const socket = require("socket.io");

const app = express();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log("Listening on PORT 4000..");
});

//Socket Setup..
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Connection is made through Socket!", socket.id);
});
