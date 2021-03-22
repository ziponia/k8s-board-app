const express = require("express");

const app = express();

app.get(`/`, (req, res) => {
  res.json({ hello: "k8s" });
});

app.listen(5000, () => {
  console.log(`Server Running At PORT 5000`);
});
