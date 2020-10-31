const User = require("../models/user"),
    getUserParams = (body) => {
        return {
            username: body.username,
            email: body.email,
            password: body.password
        };
    };

module.exports = {
    create: (req, res, next) => {
        let userParams = getUserParams(req.body);
        User.create(userParams)
        .then(user => {
            res.locals.redirect ="users";
            res.locals.user = user;
            next();
        })
        .catch(error => {
            console.log(`Error saving user:${error.message}`);
            next(error);
        })
    },

    delete: (req, res, next) => {
        let userId = req.params.id;
        User.findByIdAndRemove(userId)
            .then(() => {
                res.locals.redirect = "/users";
                next();
            })
            .catch(error => {
                console.log(`Error deleting user by Id: ${error.message}`)
                next(error);
            })
    },

    edit: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.render("edit", {
                    user: user
                });
            })
            .catch(error => {
                console.log(`Error fetching user by Id: ${error.message}`);
                next(error);
            });
    },

    index: (req, res, next) => {
        User.find()
            .then(users => {
                res.locals.users = users;
                res.render("users.ejs")
                next();
            })
            .catch(error => {
                console.log(`Error fetching users: ${error.message}`);
                next(error);
            })
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },


}