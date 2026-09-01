const express = require("express");
const ShortUrl = require("./models/shortUrl");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/naWeCulture")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });
});

app.post("/shortUrl", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

  if (shortUrl == null) return res.sendStatus(404);
  shortUrl.clicks++;

  await shortUrl.save();
  
  res.redirect(shortUrl.full);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});