const mongoose = require("./index.js");
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: false,
    },
    picture: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    reviewed: {
      type: Boolean,
      required: true,
      default: false,
    },
    accepted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
