// Modules
const express = require("express");
const burger = require("../models/burger.js");

// Router Setup
const router = express.Router();

// Routes
router.get("/", function(req, res){
    burger.selectAll(function(result){
        const hbsObject = {
            burgers: result
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name"], [req.body.burger], function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    burger.updateOne({devoured: req.body.devoured}, {id: req.params.id}, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export
module.exports = router;