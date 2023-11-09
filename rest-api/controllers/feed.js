const { check, validationResult } = require("express-validator");
const Post = require("../models/post.js");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "FirstPost",
        content: "This is the first post",
        imageUrl: "images/camera.jpg",
        creator: {
          name: "Anindita",
        },
        createdAt: new Date(),
      },
      {
        _id: "2",
        title: "2nd Post",
        content: "This is the second post",
        imageUrl: "images/camera.jpg",
        creator: {
          name: "Anindita",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPosts = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed. Incorrect data was entered.",
      errors: error.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: "new.url.png",
    creator: { name: "Anindita" },
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((error) => console.log(error));
};
