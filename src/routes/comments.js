const express = require("express");

const { getComments, Suggestions } = require("../controllers/comments");

const router = express.Router();

router.get("/", getComments);

router.post("/", Suggestions);



module.exports = router;