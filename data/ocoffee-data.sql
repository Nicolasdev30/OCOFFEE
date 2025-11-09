-- Requêtes SQL générées automatiquement pour O'Coffee


-- Insertion des pays
INSERT INTO country (name) VALUES
    ('Brésil'),
    ('Colombie'),
    ('Costa Rica'),
    ('Guatemala'),
    ('Hawaï'),
    ('Indonésie'),
    ('Italie'),
    ('Jamaïque'),
    ('Kenya'),
    ('Nicaragua'),
    ('Panama'),
    ('Pérou'),
    ('Rwanda'),
    ('Tanzanie'),
    ('Vietnam'),
    ('Éthiopie');

-- Insertion des catégories
INSERT INTO category (name) VALUES
    ('Acide'),
    ('Chocolaté'),
    ('Corsé'),
    ('Doux'),
    ('Fruité'),
    ('Épicé');

-- Insertion des cafés
INSERT INTO coffee (name, description, reference, country_id, price_per_kg, available) VALUES
    ('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', (SELECT id FROM country WHERE name = 'Italie'), 20.99, true),
    ('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', (SELECT id FROM country WHERE name = 'Colombie'), 18.75, true),
    ('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', (SELECT id FROM country WHERE name = 'Éthiopie'), 22.5, true),
    ('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', (SELECT id FROM country WHERE name = 'Brésil'), 17.8, true),
    ('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', (SELECT id FROM country WHERE name = 'Guatemala'), 21.25, true),
    ('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', (SELECT id FROM country WHERE name = 'Kenya'), 23.7, true),
    ('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', (SELECT id FROM country WHERE name = 'Indonésie'), 19.95, true),
    ('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', (SELECT id FROM country WHERE name = 'Costa Rica'), 24.5, true),
    ('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', (SELECT id FROM country WHERE name = 'Vietnam'), 16.75, true),
    ('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', (SELECT id FROM country WHERE name = 'Tanzanie'), 26.8, true),
    ('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', (SELECT id FROM country WHERE name = 'Jamaïque'), 39.25, true),
    ('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', (SELECT id FROM country WHERE name = 'Rwanda'), 21.9, true),
    ('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', (SELECT id FROM country WHERE name = 'Panama'), 42, true),
    ('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', (SELECT id FROM country WHERE name = 'Pérou'), 19.4, false),
    ('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', (SELECT id FROM country WHERE name = 'Hawaï'), 55.75, false),
    ('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', (SELECT id FROM country WHERE name = 'Nicaragua'), 28.6, false);

-- Associations café-catégorie
INSERT INTO coffee_category (coffee_id, category_id) VALUES
    ((SELECT id FROM coffee WHERE reference = '100955890'), (SELECT id FROM category WHERE name = 'Corsé')),
    ((SELECT id FROM coffee WHERE reference = '100955890'), (SELECT id FROM category WHERE name = 'Épicé')),
    ((SELECT id FROM coffee WHERE reference = '100955894'), (SELECT id FROM category WHERE name = 'Acide')),
    ((SELECT id FROM coffee WHERE reference = '105589090'), (SELECT id FROM category WHERE name = 'Doux')),
    ((SELECT id FROM coffee WHERE reference = '105589090'), (SELECT id FROM category WHERE name = 'Fruité')),
    ((SELECT id FROM coffee WHERE reference = '134009550'), (SELECT id FROM category WHERE name = 'Doux')),
    ((SELECT id FROM coffee WHERE reference = '256505890'), (SELECT id FROM category WHERE name = 'Corsé')),
    ((SELECT id FROM coffee WHERE reference = '295432730'), (SELECT id FROM category WHERE name = 'Doux')),
    ((SELECT id FROM coffee WHERE reference = '295432730'), (SELECT id FROM category WHERE name = 'Acide')),
    ((SELECT id FROM coffee WHERE reference = '302932754'), (SELECT id FROM category WHERE name = 'Corsé')),
    ((SELECT id FROM coffee WHERE reference = '327302954'), (SELECT id FROM category WHERE name = 'Acide')),
    ((SELECT id FROM coffee WHERE reference = '549549090'), (SELECT id FROM category WHERE name = 'Épicé')),
    ((SELECT id FROM coffee WHERE reference = '582954954'), (SELECT id FROM category WHERE name = 'Fruité')),
    ((SELECT id FROM coffee WHERE reference = '582954954'), (SELECT id FROM category WHERE name = 'Corsé')),
    ((SELECT id FROM coffee WHERE reference = '589100954'), (SELECT id FROM category WHERE name = 'Doux')),
    ((SELECT id FROM coffee WHERE reference = '650753915'), (SELECT id FROM category WHERE name = 'Fruité')),
    ((SELECT id FROM coffee WHERE reference = '795501340'), (SELECT id FROM category WHERE name = 'Fruité')),
    ((SELECT id FROM coffee WHERE reference = '954589100'), (SELECT id FROM category WHERE name = 'Corsé')),
    ((SELECT id FROM coffee WHERE reference = '954589100'), (SELECT id FROM category WHERE name = 'Chocolaté')),
    ((SELECT id FROM coffee WHERE reference = '958090105'), (SELECT id FROM category WHERE name = 'Doux')),
    ((SELECT id FROM coffee WHERE reference = '691550753'), (SELECT id FROM category WHERE name = 'Corsé')),
    ((SELECT id FROM coffee WHERE reference = '691550753'), (SELECT id FROM category WHERE name = 'Fruité'));

