const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleSecret,
	callbackURL: '/auth/google/callback'
  }, (accessToken) => {
	console.log(accessToken);
  })
);

app.get('/', (req, res) => {
  res.send({hi: 'there'})
});


const PORT = process.env.PORT || 8880;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));