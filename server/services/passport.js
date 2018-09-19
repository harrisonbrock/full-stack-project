const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleSecret,
	callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {

  User.findOne({googleId: profile.id})
	.then((exitingUser) => {
	  if (exitingUser) {
	    done(null, exitingUser);
	  }
	  else {
		new User({googleId: profile.id})
		  .save()
		  .then(user => done(null, user));
	  }
	});

  })
);