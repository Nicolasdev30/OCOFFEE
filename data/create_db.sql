DROP TABLE IF EXISTS "country";

DROP TABLE IF EXISTS "category";

DROP TABLE IF EXISTS "coffee";

DROP TABLE IF EXISTS "coffee_category";

CREATE TABLE "country" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) UNIQUE NOT NULL
);

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) UNIQUE NOT NULL
);

CREATE TABLE "coffee" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(128) UNIQUE NOT NULL,
    "description" TEXT,
    "reference" CHAR(9) UNIQUE NOT NULL,
    "price_per_kg" DECIMAL NOT NULL,
    "available" BOOLEAN NOT NULL,
    "country_id" INT REFERENCES "country" ("id")
);

CREATE TABLE "coffee_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "coffee_id" INT REFERENCES "coffee" ("id"),
    "category_id" INT REFERENCES "category" ("id"),
    UNIQUE ("coffee_id", "category_id")
);