module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')  // renders the index.ejs homepage
    },
    getHome: (req,res)=>{
        res.render('home.ejs')  // renders the home.ejs homepage
    }
}