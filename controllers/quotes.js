const Quote = require("../models/Quote");

module.exports = {
  getQuotes: async (req, res) => {
    console.log(req.user);
    try {
      const quoteItems = await Quote.find({ userId: req.user.id });

      res.render("quotes.ejs", {
        quotes: quoteItems,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createQuote: async (req, res) => {
    try {
      await Quote.create({
        quote: req.body.quoteItem,
        userId: req.user.id,
      });
      console.log("Quote has been added!");
      res.redirect("/quotes");
    } catch (err) {
      console.log(err);
    }
  },
  updateQuote: async (req, res) => {
    try {
      await Quote.findOneAndUpdate(
        { _id: req.body.quoteIdFromJSFile },
        {
          updated: true,
        }
      );
      console.log("Quote updated");
      res.json("Quote updated");
    } catch (err) {
      console.log(err);
    }
  },
  deleteQuote: async (req, res) => {
    console.log(req.body.quoteIdFromJSFile);
    try {
      await Quote.findOneAndDelete({ _id: req.body.quoteIdFromJSFile });
      console.log("Deleted quote");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
