// Modules
const express = require("express");
const db = require("../models");

// Router Setup
const router = express.Router();

// Routes
router.get("/", function(req, res){
    db.burgers.findAll({}).then(function(results){
        console.log(results);
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
        console.log(result.insertId);
        res.json({id: result.insertId});
    });
});

// router.put("/api/burgers/:id", function(req, res){
//     burger.updateOne({devoured: req.body.devoured}, {id: req.params.id}, function(result){
//         if (result.changedRows === 0) {
//             return res.status(404).end();
//         }
//         res.status(200).end();
//     });
// });

// Export
module.exports = router;