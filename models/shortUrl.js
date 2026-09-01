const mongoose = require('mongoose');
const shortId = require('shortid');
shortId.generate();

const shortUrlSchema = new mongoose.Schema({ 
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  full: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

module.exports = ShortUrl;