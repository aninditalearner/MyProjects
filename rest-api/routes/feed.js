const express = require("express");
const { check, body } = require("express-validator");
const feedController = require("../controllers/feed.js");

const router = express.Router();

//GET /feed/posts
router.get("/posts", feedController.getPosts);

//POST /feed/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPosts
);

module.exports = router;
