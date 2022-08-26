const pbkdf2 = require('pbkdf2') // allows us to hash a string

//*hashing algorithim
const crypto = require('crypto') // salt - mixing up of letters

let password = "some user password"

let salt = crypto.randomBytes(20).toString('hex')//method used to randomzie letters in password 20 times and convert to a hex string

// console.log(salt)

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

let hash = key.toString('hex')

// console.log(hash)

let stored_pass = `pbkdf2_sh256*3600*${salt}*${hash}`

console.log(stored_pass)

//------------------------------

let newLoginPassword = "some user password"

//retrieve password from db 
let pass_parts = stored_pass.split('*') //[pbkdf2, sha256, 3600, salt, hash]

console.log(pass_parts)

let newPassword = pbkdf2.pbkdf2Sync(newLoginPassword, pass_parts[2], parseINt[pass_parts[1], 256, 'sha256'])

let hashLoginPassword = newPassword.toString('hex')

if(hashLoginPassword == pass_parts[3]){
  console.log('passwords match')
}
else{
  console.log('What are you trying to do?')
}