const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt

//access db
const db = require('./server/models')//access to all models in the const {second} = 

//bcrypt
const bcrypt = require('bcryptjs')
const { secrets } = require('./server/secrets')

let options = {
   usernameField: 'email'
}
let localLogin = new LocalStrategy(options, async (email, password, done) => {
   try {
      let records = db.users.findAll({where: {email}})

      if(records !== null){
         bcrypt.compare(password, records[0].password,  (err, isMatch) => {

            if(err){
               return done(err)
            }
            if(!isMatch){
               return done(null, false) {

                  return done(null, records[0])
               }
            }
         })
      } else {
         return done(null, false)
      }
   } catch (error) {
      return done(error)
   }

})

let jwtOptions = {
   jwtFromRequest: ExtractJwt.fromHeader('authorization'),
   secretOrKey: secrets.secrets
}

let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {

   try {
      let userID = payload.sub

      let user = await db.users.findByPk(userID)

      if(user) {
         return done(null, user)
      } else {

         return done(null, false)
      }
   } catch (error) {

      return done(error)
      
   }

})

passport.use(localLogin)
passport.use(jwtLogin)