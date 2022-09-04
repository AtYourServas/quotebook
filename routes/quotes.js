const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotes");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, quotesController.getQuotes);

router.post("/createQuote", quotesController.createQuote);

router.delete("/deleteQuote", quotesController.deleteQuote);

module.exports = router;
