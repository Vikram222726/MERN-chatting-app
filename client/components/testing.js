import React from "react";
import openSocket from "socket.io-client";

const Testing = () => {
  const socket = openSocket("http://localhost:4000");
  // Make Socket connection with the server..
  return <div className="testing">Testing the workflow</div>;
};

export default Testing;
