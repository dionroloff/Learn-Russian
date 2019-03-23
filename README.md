# Learn Russian

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `person` table:

```SQL
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

## Development Setup Instructions

* `npm install`
* `npm run server`
* `npm run client`

## How to Use

Log in as me:

```
Username: Dion 
Password: apple
```

Or register as a new user. When logged in, the user will be presented with thematically organized decks of cards. This is where the user will choose which deck to study.

Upon clicking on a deck, the user is presented with each of the cards in that deck. From there, cards can be created or deleted from the deck.

When ready, click “Study Deck”. Then, to study the deck, click “Start”. The four images which render will be randomly pulled from the deck. The Russian word you at the top is the word in question which the user will try to connect to the corresponding image.

If the image is correctly guessed, four new cards will render on the screen. If the guess is incorrect, an alert will appear at the top of the page prompting the user to guess again.
