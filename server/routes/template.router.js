const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

router.get('/decks', (req, res) => {
    console.log(`req.body: ${req.body}`);
    if (req.isAuthenticated()) {
        console.log(`req.user: ${req.user}`);
        pool.query(`SELECT * FROM "category";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log(`Error in GET /decks: ${error}`);
            res.sendStatus(500);
        })

    } else {res.sendStatus(403);}
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;