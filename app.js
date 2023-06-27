import "dotenv/config";

import { omdbApi, omdbKey, port } from "./config/keys.js";

import express from "express";
const app = express();

import axios from "axios";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/movies/get/:title?", (req, res) => {
  if (!req.params.title) return res.status(404).send("Empty(");

  let mTitle = encodeURIComponent(req.params.title);
  axios
    .get(`${omdbApi}/?apikey=${omdbKey}&t=${mTitle}`)
    .then(({ data }) => {
      if (data.Error) {
        throw new Error(data.Error);
        //throw new Error('false 😢');
      }
      res.json(data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

c
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
