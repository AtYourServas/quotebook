const Quote = require("../models/Quote");

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')  // renders the index.ejs homepage
    },
    getHome: async (req, res) => {
        console.log(req.user);
        try {
          const quoteItem = await Quote.find({ userId: req.user.id });
    
          res.render("home.ejs", {
            quotes: quoteItem,
            user: req.user,
          });
        } catch (err) {
          console.log(err);
        }
      }                   // renders the home.ejs homepage
}