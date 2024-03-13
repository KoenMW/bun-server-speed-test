import express from "express";
import fs from "fs";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  const files = fs.readdirSync("express");
  files.forEach((file) => {
    fs.unlinkSync(`express/${file}`);
  });
  res.send(`Deleted ${files.length} files`);
});

app.post("/", (req, res) => {
  const filename = `express/${Math.random()}`;
  fs.writeFileSync(filename, "");
  res.send("Seed created");
});

app.use((req, res) => {
  res.status(405).send("Method not allowed");
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
