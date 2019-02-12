const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});
/**
 * POST route template
 */
router.post('/', (req, res) => {

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

router.post('/', (req, res) => {
    const newCard = req.body;
    const queryText = `INSERT INTO "card" ("word_en", "user_id", "category")
                       VALUES ($1, $2, $3);`;
    const queryValues = [
      newCard.en_word,
      newCard.ru_word,
      newCard.image
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing INSERT card query', err);
        res.sendStatus(500);
      });
});



module.exports = router;