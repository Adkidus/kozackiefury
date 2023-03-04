const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Translation = require("../../models/Translation");

router.get("/list", auth, async (req, res) => {
  try {
    let list = await Translation.find();
    return res.status(200).send(list);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.put("/add", auth, async (req, res) => {
  try {
    const post = await new Translation(req.body).save();
    return res.status(201).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/update/:id", auth, async (req, res) => {
  try {
    // const { title, desc, category, subCategory, tags, state } = req.body;
    // const post = await Translation.updateOne(
    //   { _id: req.params.id, "author.userId": req.body.userId },
    //   { title, desc, category, subCategory, tags, state }
    // );
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") throw new Error("Bad role!");
    await Translation.findOneAndDelete({ _id: req.params.id });
    return res.send("Translate deleted");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});


module.exports = router;
