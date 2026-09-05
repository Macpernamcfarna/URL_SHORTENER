const express = require("express");
const ShortUrl = require("./models/shortUrl");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || ""mongodb+srv://macpernamcfarna: macpernamcfarna@cluster0.gw4t92o.mongodb.net/?appName=Cluster0"";

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGODB_URI)
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
