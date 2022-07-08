
BEGIN;

DROP TABLE IF EXISTS "names", "adjectives", "verbs", "complements", "corrections";

CREATE TABLE "names" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255) UNIQUE NOT NULL,  
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

CREATE TABLE "adjectives" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "adjective" VARCHAR(255) UNIQUE NOT NULL,  
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

CREATE TABLE "verbs" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "verb" VARCHAR(255) UNIQUE NOT NULL,  
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE "complements" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "complement" VARCHAR(255) UNIQUE NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()  
);

CREATE TABLE "corrections" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "correction" VARCHAR(255) NOT NULL,
  "origine_name" VARCHAR(255) NOT NULL,
  "origine_adjective" VARCHAR(255) NOT NULL, 
  "origine_verb" VARCHAR(255) NOT NULL, 
  "origine_complement" VARCHAR(255) NOT NULL, 
  "note" INTEGER DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ 
);



INSERT INTO "names" ("name")
  VALUES 
    ("un cheval"),
    ("la mairie de Neuilly-sur-Seine"),
    ("une huître"),
    ("Julie Andrieu"),
    ("Jacky et sa Subaru Impreza"),
    ("la gendarmerie hollandaise"),
    ("un chauve"),
    ("Simon"),
    ("2 chatons"); 

INSERT INTO "adjectives" ("adjective")
  VALUES
    ("bien cuit"),
    ("blond"),
    ("guilleret"),
    ("ankylosé"),
    ("blafard"),
    ("rasé de près"),
    ("amputé d'un doigt");

INSERT INTO "verbs" ("verb")
  VALUES 
    ("consulte"),
    ("franchit"),
    ("cuisine"),
    ("remet en question"),
    ("s'immole pour protester contre"),
    ("enduit de confiture"),
    ("instaure"),
    ("déguste");

INSERT INTO "complements" ("complement")
  VALUES
    ("un seau en plastique"),
    ("la consommation de café"),
    ("Yann"),
    ("3 roues de voiture"),
    ("2 mains gauches"),
    ("un skieur débutant"),
    ("la Mer Noire");

COMMIT; 