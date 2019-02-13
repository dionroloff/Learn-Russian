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

//This GET request runs when the user is on the YourDecks page
//It is reponsible for displaying each of the user's decks from the DB
router.get('/your-decks', (req, res) => {
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

//this router allows the user to click on a particular deck and only see 
//the cards from that deck from the database
router.get('/:id', (req, res) => {
    console.log('req.params: ', req.params);
    //JOIN query joins cards table and category table to select 
    //only the cards of a particular category
    const queryText = `select "word_en", "word_ru", "image", "category", "name" 
                       from "card"
                       join "category" 
                       on "card"."category" = "category"."id"
                       where "category" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((sqlResult) => {
        //sqlResults refers to the joined card and category tables
        //We will send this data to the saga when we call router.get('/cards');
        res.send(sqlResult.rows);
        res.sendStatus(200);
    }).catch((sqlError) => {
        console.log(`Error in completing /cards query: ${sqlError}`);
        res.sendStatus(500);
    })
})

// router.post('/', (req, res) => {
//     const newCard = req.body;
//     const queryText = `INSERT INTO "card" ("word_en", "user_id", "category")
//                        VALUES ($1, $2, $3);`;
//     const queryValues = [
//       newCard.en_word,
//       newCard.ru_word,
//       newCard.image
//     ];
//     pool.query(queryText, queryValues)
//       .then(() => { res.sendStatus(201); })
//       .catch((err) => {
//         console.log('Error completing INSERT card query', err);
//         res.sendStatus(500);
//       });
// });



module.exports = router;