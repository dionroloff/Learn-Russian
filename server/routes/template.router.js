const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//This GET request runs when the user is on the YourDecks page
//It is reponsible for displaying each of the user's decks from the DB
router.get('/your-decks', (req, res) => {
    console.log(`req.body: ${req.body}`);
    if (req.isAuthenticated()) {
        console.log(`req.user: ${req.user}`);
        const queryText = `select *
                           from "category";`;
        pool.query(queryText)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log(`Error in GET /decks: ${error}`);
            res.sendStatus(500);
        })

    } else {res.sendStatus(403);}
})

//this request allows the user to click on a particular deck and only see 
//the cards from that deck from the database, regardless of whether the cards are learned or not
router.get('/:id', (req, res) => {
    console.log('req.params: ', req.params);
    //JOIN query joins cards table and category table to select 
    //only the cards of a particular category
    const queryText = `select "word_en", "word_ru", "image", "category", "name", "card"."id"
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

router.get('/stats/:id', (req, res) => {
    console.log(`in stats router: ${req.body}`);
    const queryText = `select * from "guesses" 
                       where "time_stamp" < $1;`;
    pool.query(queryText, [today.getDate()])
    .then((sqlResult) => {
        res.send(sqlResult.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`error in stats router: ${error}`);
        res.sendStatus(500);
    })

})

//this request POSTs a new card to the database
router.post('/', (req, res) => {
    console.log(req.body)
    const newCard = req.body;
    const queryText = `insert into "card" ("word_en", "word_ru", "image", "user_id", "category")
                       values ($1, $2, $3, $4, $5);`;
    // req.user.id is created by passport for logged in users
    const queryValues = 
    [
      newCard.word_en,
      newCard.word_ru,
      newCard.image,
      req.user.id,
      newCard.deck_category
    ];
    pool.query(queryText, queryValues)
      .then((response) => { 
          console.log('response: ', response)
          res.sendStatus(201); 
        })
      .catch((error) => {
        console.log('Error completing INSERT card query', error);
        res.sendStatus(500);
      });
});

router.post('/guess/:id', (req, res) => {
    console.log('in guess post router');
    const newGuess = req.body;
    const queryText = `insert into guesses ("user_id", "card_id", "guessed_correctly")
                       values ($1, $2, $3);`;
    const queryValues = 
    [
        newGuess.user_id,
        newGuess.card_id,
        'true'
    ];
    pool.query(queryText, queryValues)
    .then((response) => {
        console.log('response', response);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`error in guess post router: ${error}`);
    })
});

router.delete('/:id', (req, res) => {
    console.log(`req.params: ${req.params}`);
    const queryText = `delete from "card" where "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in deleting card: ${error}`);
        res.sendStatus(500);
    })
})



module.exports = router;