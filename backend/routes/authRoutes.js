const passport = require('passport');
const express = require('express');
const app = express();
const User = require("../models/User");

const CLIENT_URL = "http://localhost:3000/profile";

module.exports = app => {

    app.get("/login/success", (req, res) => {
      if (req.user) {
        res.status(200).json({
          success: true,
          message: "successfull",
          user: req.user,
          cookies: req.cookies
        });
      }
    });

    app.get("/login/failed", (req, res) => {
      res.status(401).json({
        success: false,
        message: "failure",
      });
    });

    app.get('/auth/error', (req, res) => res.send('Unknown Error'))

    app.get('/auth/github',passport.authenticate('github',{ scope: ["profile"] }));

    app.get('/auth/github/callback', passport.authenticate('github'),(req,res)=>{
      res.redirect(CLIENT_URL);
    });

    app.get('/api/logout', (req, res) => {
        req.session = null;
        req.logOut();
        res.redirect('http://localhost:3000/login');
    });

    app.get("/user/profile/api", async (req, res) => {
      try {
        const user = await User.findOne(req.user)
        res.send(user)
      } catch (error) {
        console.log(error)
      }
    })
};