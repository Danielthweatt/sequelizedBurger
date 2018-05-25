// Modules
const express = require("express");
const db = require("../models");

// Router Setup
const router = express.Router();

// Routes
router.get("/", function(req, res){
    db.burgers.findAll({}).then(function(results){
        const hbsObject = {
            burgers: results
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    db.burgers.create({
        burger_name: req.body.burger    
    }).then(function(result){
        res.json({id: result.dataValues.id});
    });
});

router.put("/api/burgers/:id", function(req, res){
    db.burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(result){
        if (result === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export
module.exports = router;