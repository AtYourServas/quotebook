module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },
    ensureGuest: function (req, res, next) {
      if (req.isAuthenticated()) {  // check if authenticated
        res.redirect('/home')  // if not authenticated, send to login page 
      } else {
        return next()  // if so, redirected to home.ejs landing page
      }
    }
  }
  