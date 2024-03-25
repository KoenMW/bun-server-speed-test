import express from "express";
const app = express();
const port = 3001;

let seeds = 0;

app.get("/", (_req, res) => {
  console.log(`Seeds created: ${seeds}`); 
  res.send(`Seeds created: ${seeds}`);
});

app.post("/", (_req, res) => {
  seeds++;
  console.log(`Seeds created: ${seeds}`);
  res.send(`Seeds created: ${seeds}`);
});

app.use((_req, res) => {
  res.status(404).send("404 Not Found");
});

app.delete("/", (_req, res) => {
  console.log("deleting seeds...")
  seeds = 0;
  res.send(`Seeds created: ${seeds}`);
});

app.listen(port, () => {
  console.log(`Express listening on localhost:${port}`);
});
