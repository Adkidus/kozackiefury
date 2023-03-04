const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const BlogPost = require("../../models/BlogPost");

router.get("/list", auth, async (req, res) => {
  try {
    let list = await BlogPost.find({
      "author.userId": req.user._id,
      state: { $ne: "archived" },
    });
    return res.status(200).send(list);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/archived", auth, async (req, res) => {
  try {
    let list = await BlogPost.find({
      "author.userId": req.body.userId,
      state: "archived",
    });
    return res.status(200).send(list);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.put("/add", auth, async (req, res) => {
  try {
    const { firstName, lastName, _id } = req.user;
    const author = { firstName, lastName, userId: _id };
    req.body.author = author;
    const post = await new BlogPost(req.body).save();
    return res.status(201).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/update/:id", auth, async (req, res) => {
  try {
    const { title, desc, category, subCategory, tags, state } = req.body;
    const post = await BlogPost.updateOne(
      { _id: req.params.id, "author.userId": req.body.userId },
      { title, desc, category, subCategory, tags, state }
    );
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await BlogPost.updateOne(
      { _id: req.params.id, "author.userId": req.body.userId },
      { state: "archived" }
    );
    return res.send("Post is archive");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/force/:id", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") throw new Error("Bad role!");
    await BlogPost.findOneAndDelete({ _id: req.params.id });
    return res.send("Post deleted");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
