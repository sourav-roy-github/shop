import bcrypt from 'bcryptjs' //hash our password
//*Understand hashsync() method */
//https://levelup.gitconnected.com/using-bcrypt-to-hash-and-compare-passwords-with-nodejs-and-mongodb-366ff80138b7

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
