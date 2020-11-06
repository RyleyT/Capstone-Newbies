const bcrypt = require("bcryptjs");
const Rounds = 12;//cost factor to creating hash. The higher it is the longer it takes to create hash and the longer it will take to bruteforce(ideally)
module.exports = {
    hashPassword: (password) => 
    {
       return bcrypt.hash(password, Rounds);//this brcypt call might take a little bit so returns a promise
    }
}