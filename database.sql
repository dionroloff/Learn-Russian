CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar(40) NOT NULL,
	"password" varchar(40) NOT NULL
);

CREATE TABLE "card" (
	"id" SERIAL PRIMARY KEY,
	"word_en" varchar(40) NOT NULL,
	"word_ru" varchar(40),
	"image" VARCHAR(255),
	"user_id" INT NOT NULL,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"category" INT NOT NULL
);


CREATE TABLE "guesses" (
	"user_id" INT NOT NULL,
	"card_id" INT NOT NULL,
	"guessed_correctly" BOOLEAN NOT NULL DEFAULT 'false'
);


CREATE TABLE "category" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(40) NOT NULL
);


ALTER TABLE "card" ADD CONSTRAINT "card_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "card" ADD CONSTRAINT "card_fk1" FOREIGN KEY ("category") REFERENCES "category"("id");

ALTER TABLE "guesses" ADD CONSTRAINT "guesses_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "guesses" ADD CONSTRAINT "guesses_fk1" FOREIGN KEY ("card_id") REFERENCES "card"("id");