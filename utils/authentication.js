const bcrypt = require("bcrypt");

module.exports = {
    hashPassword: (password, rounds) => {
       let hashedPW = bcrypt.hash(password, rounds);
       return hashedPW;
    }
}