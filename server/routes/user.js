const express = require("express");

const router = new express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post("/users/login", (req, res) => {
    console.log("Zaaa Userooo:", req.body)
});

module.exports = router;