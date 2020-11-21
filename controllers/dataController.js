const fetch = require('node-fetch');

module.exports = {
    index: (req, res, next) => {
        fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(apiResponse => apiResponse.json())
        .then(apijson =>{
            console.log(apijson[10]);
        });

        res.render("tracker.html");
        next();
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },


}