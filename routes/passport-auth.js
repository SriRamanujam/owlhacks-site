var passport = require('passport'),
    LocalStrategy = require('passport-local');

var localAuth = function(username, password) {
    User.login(username, password)
        .then(function(user) {
            res.status(200).json(user.omit('password'));
        }).catch(User.NotFoundError, function() {
            console.log("User " + username + " not found in database");
            res.status(400).send({error: 'Unspecified login error'});
        }).catch(function(err) {
            console.log(err);
            res.status(400).send({error: "Unspecified login error"});
        });
};

passport.use('login', new LocalStrategy(
    {passReqToCallback: true},
    function(req, username, password, done) {
    
    }
));


exports.route = function(app) {
    app.post('/rest/register', passport.authenticate('register'), {
        successRedirect: '/',
        failureRedirect: '/register'
    });

    app.post('/rest/login', passport.authenticate('login'), {
        successRedirect: '/',
        failureRedirect: '/login'
    });

    app.get('/rest/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
