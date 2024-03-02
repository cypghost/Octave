const express = require("express");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const session = require("express-session");
const app = express();
const port = 3000;

// Use sessions to keep track of login state
app.use(
  session({
    secret: "f6eafba3bb884a40b1a12309e02c5c2c",
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Spotify authentication strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: "675f31e5783d4d0f84f3fbf88e9f8e84",
      clientSecret: "f6eafba3bb884a40b1a12309e02c5c2c",
      callbackURL: "http://localhost:3000/auth/spotify/callback",
    },
    (accessToken, refreshToken, expires_in, profile, done) => {
      // Save user information to the session
      return done(null, profile);
    }
  )
);

// Serialize user information into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user information from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Route to start Spotify authentication
app.get("/auth/spotify", passport.authenticate("spotify"));

// Callback route after successful Spotify authentication
app.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/musiclist");
  }
);

// Route to check if the user is authenticated
app.get("/user", (req, res) => {
  res.json({ user: req.isAuthenticated() ? req.user : "Not authenticated" });
});

// Logout route
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
