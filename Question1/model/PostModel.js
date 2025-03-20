const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postId: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  content: { type: String, required: true },
  commentCount: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
