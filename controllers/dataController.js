const fetch = require('node-fetch');

module.exports = {
    index: async (req, res, next) => {
       await fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(apiResponse => apiResponse.json())
        .then(apijson =>{
            res.locals.states = apijson;
            console.log(res.locals.states[10]);
            res.render('tracker.ejs');
            next();       
        });       
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },


}