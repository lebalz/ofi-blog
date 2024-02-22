DROP TABLE IF EXISTS haustiere;
DROP TABLE IF EXISTS legodudes_freunde;
DROP TABLE IF EXISTS legodudes;


CREATE TABLE legodudes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    beschreibung TEXT,
    land TEXT,
    essen TEXT,
    alter INT,
    lieblingszahl INT,
    bild TEXT,
    mehr TEXT
);

CREATE TABLE legodudes_freunde (
    id SERIAL PRIMARY KEY,
    legodude_id INT REFERENCES legodudes(id) ON DELETE SET NULL,
    freund_id INT REFERENCES legodudes(id) ON DELETE SET NULL
);

CREATE TABLE haustiere (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    tierart TEXT,
    lieblingsfutter TEXT,
    bild TEXT,
    legodude_id INT REFERENCES legodudes(id)
);


INSERT INTO legodudes (
    id,
    name,
    beschreibung,
    land,
    essen,
    alter,
    lieblingszahl,
    bild,
    mehr
) VALUES (
    1,
    'Litty Feuerwehr',
    'Sie löscht nicht, sondern bringt die anderen dazu.',
    'Schweden',
    'Heisse Schokolade',
    32,
    7,
    'https://ofi.gbsl.website/img/lego/lego_2.jpg',
    'Litty Feuerwehr hat eine sehr laute Stimme. Diese nutzt sie, um ihren Kolleginnen und Kollegen der städtischen Feuerwehr Anweisungen zukommen zu lassen.'
),(
    2,
    'Crazy Lego Dude',
    'Er hat gerne Dinos und trägt abegahrene Mode.',
    'Österreich',
    'Spaghetti',
    23,
    42,
    'https://ofi.gbsl.website/img/lego/lego_1.jpg',
    'Namentlich Johnson Sicc führt ein kleines Detailhandelsgeschäft in den Alpen. In den Bergen sucht er nach Steinen, welche Dinos ähneln.'
),(
    3,
    'Elon Marsk',
    'Seine Ideologie hat ihn zum Wahnsinn getrieben.',
    'USA',
    'Lasagne',
    69,
    420,
    'https://ofi.gbsl.website/img/lego/lego_3.jpg',
    'Früher wollte er unbedingt Leute zum Mars schicken. Als seine Firma aber bankrott ging und er der einzige Mitarbeiter war, musste er es selbst tun. Das hat er auch geschafft. Das einzige positive an der Mission war aber sein Überleben.'
), (
    4,
    'Larry der Stürmer',
    'Er lebt für sein Rugby-Team und wird früher oder später auch dafür sterben.',
    'Irland',
    'Ovo-Sport',
    19,
    13,
    'https://ofi.gbsl.website/img/lego/lego_4.jpg',
    'Mit seinem Vater besuchte Larry mit 5 Jahren erstmals ein Spiel vom lokalen Rugby-Club "Green Deamons" und war sofort Feuer und Flamme. Er trat dem Club bei und spielt seither bei jedem Spiel mit. Wegen seiner Physis rennt er immer sehr schnell und wird deswegen gern als Stürmer eingesetzt.'
), (
    5,
    'A$AP Geerky',
    'Er ergänzt seinen Squad mit gezielten Animationen und Gamedesign.',
    'USA',
    'G-Fuel',
    24,
    69,
    'https://ofi.gbsl.website/img/lego/lego_5.jpg',
    'Mit seinen hochwertigen Indie-Games, die er in seinem Kinderzimmer gemacht hat, hat er die Aufmerksamkeit von A$AP Mob auf sich gezogen. Diese Gruppe ist ein Games-Verleger. Er ist ein lebender Beweis dafür, dass sich "kein Leben haben" auszahlt. Denn er hat jetzt hella Chicks.'
),(
    6,
    'Wigwam Tipi',
    'Sie setzt sich für eine Häuptlinginnen ein.',
    'USA',
    'Bison-Trockenfleisch',
    18,
    1,
    'https://ofi.gbsl.website/img/lego/lego_6.jpg',
    'Mit 3 Jahren hat sie ihre Leidenschaft für die Jagd entdeckt. Seither ist sie mit ihrem spezifischen Handgeschick im Bogenschiessen nicht mehr von der jährlichen Bison-Jagd wegzudenken.'
),(
    7,
    'Botot',
    'Man weiss nicht so genau, wer er ist. Das macht ihn auch so speziell.',
    'Schweiz',
    'Milch',
    37,
    99,
    'https://ofi.gbsl.website/img/lego/lego_7.jpg',
    'Ein typischer Schweizer. Hat halt einen selbstmähenden Rasenmäher im Garten seines Einfamilien-Neubaus. Er kommt eigentlich nur aus dem Haus, wenn die Nachbarkids zu laut Peter Reber hören.'
);


-- LegodudeFreunde Beziehungen einfügen
INSERT INTO legodudes_freunde (legodude_id, freund_id)
VALUES
    (2, 6),
    (1, 4),
    (3, 3),
    (2, 5),
    (5, 6),
    (7, 1),
    (7, 2),
    (7, 4),
    (7, 5),
    (7, 6);


INSERT INTO haustiere (id, name, tierart, lieblingsfutter, bild, legodude_id)
VALUES
    (1, 'Fluffy', 'Hund', 'Knochen', 'https://ofi.gbsl.website/img/lego/pet_1.webp', 6),
    (2, 'Whiskers', 'Katze', 'Fisch', 'https://ofi.gbsl.website/img/lego/pet_2.webp', 4),
    (3, 'Spike', 'Igel', 'Äpfel', 'https://ofi.gbsl.website/img/lego/pet_3.jpg', 4),
    (4, 'Buddy', 'Papagei', 'Körner', 'https://ofi.gbsl.website/img/lego/pet_4.jpg', 6),
    (5, 'Finn', 'Hamster', 'Körner', 'https://ofi.gbsl.website/img/lego/pet_5.webp', 5),
    (6, 'Max', 'Hund', 'Leckerli', 'https://ofi.gbsl.website/img/lego/pet_6.webp', 1),
    (7, 'Dundun', 'Dino', 'Babaganusch', 'https://ofi.gbsl.website/img/lego/pet_7.jpg', 2);