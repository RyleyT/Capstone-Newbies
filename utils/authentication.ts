import * as bcrypt from 'bcryptjs';

export default class Auth {

    public static hashPassword(password, rounds, callback: (error, hash) => void) : void {
        bcrypt.hash(password, rounds, (error, hash) => {
            callback(error, hash);
        });
    }
}