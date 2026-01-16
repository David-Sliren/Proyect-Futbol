import fs from "node:fs/promises";
import path from "node:path";
import express from "express";
import morgan from "morgan";

const app = express();

const nike = [
  {
    id: 1,
    name: "nike mercurials",
    price: 70.0,
    stock: 15,
  },
];

async function futbol() {
  const url = "https://api.football-data.org/v4/matches";
  const data = await fetch(url, {
    method: "GET",
    headers: { "X-Auth-Token": "a3e708b251f247c1a88e4ff19b66aaf5" },
  });
  const all = await data.json();
  console.log(all);
}

futbol();

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<body style='background: black; color: white;'><h1>Hello World</h1></body>"
  );
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.post("/", (req, res) => {
  const userdata = req.body;

  console.log(userdata);
  res.status(200);

  res.send(userdata);
});

app.get("/estatico", async (req, res) => {
  const allFile = await fs.readdir(path.resolve("./imgApi"));
  const data = allFile.map((file, i) => {
    return { id: i, name: file };
  });
  res.json(data);
});

app.get("/estatico/:name", async (req, res) => {
  const { name } = req.params;
  const File = path.resolve(`./imgApi/${name}`);
  res.sendFile(File, (error) => res.status(404).send(error));
});

app.listen(3000, () => console.log("server is running on port 3000"));
