const express = require("express");
const router = express.Router();
const { Vocabulary } = require("../models");

// Lấy từ vựng 
router.get("/", async (req, res) => {
  try {
    const vocabulary = await Vocabulary.findAll();
    res.json(vocabulary);
  }
  catch (error) {
    res.status(500).send('[LOG] Cannot get vocabulary');
  }
});

// Thêm một từ vựng mới
router.post("/", async (req, res) => {
  const {eng_word, vie_meaning} = req.body;
  try {
    const newVocab = await Vocabulary.create({eng_word, vie_meaning});
    res.status(201).json(newVocab);
  }
  catch (error)
  {
    res.status(500).send("[LOG] Cannot post new vocabulary");
  }
});

module.exports = router;