# MLD

**country**
id INT PK
name TEXT

**specification**
id INT PK
label TEXT

**coffee**
id INT PK
name TEXT
reference TEXT
description TEXT
is_available BOOLEAN
price NUMERIC
country_id INT FK country(id)

**specifications_per_coffee**
id INT PK
specification_id INT FK specification(id)
coffee_id INT FK coffee(id)
