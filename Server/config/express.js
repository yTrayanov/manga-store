const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const mangaRoutes = require('../routes/manga')
const statsRoutes = require('../routes/stats')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes);
  app.use('/manga', mangaRoutes);
  app.use('/stats', statsRoutes);
}