import client from "./client.js";

const datamapper = {
  async findLatestsCoffeeProducts(numberOfProducts) {
    const preparedQuerry = {
      text: `
        SELECT c.id, c.name, c.reference 
        FROM coffee c 
        WHERE c.available = true
        ORDER BY c.id DESC
        LIMIT $1;`,
      values: [numberOfProducts],
    };
    const results = await client.query(preparedQuerry);
    return results.rows;
  },
  async findAllCoffeeProducts() {
    const results = await client.query(`
      SELECT c.id, c.reference, c.name, c.price_per_kg, co.name AS country
      FROM coffee c 
        JOIN country co ON c.country_id = co.id;`);
    return results.rows;
  },
  async findCoffeeId() {
    const results = await client.query("SELECT id FROM coffee;");
    return results.rows;
  },
  async findOneCoffeeProduct(coffeeId) {
    const preparedQuerry = {
      text: `
        SELECT c.name, c.description, c.reference, c.price_per_kg, c.available, co.name AS country, ARRAY_AGG(ca.name) AS categories
        FROM coffee c
          JOIN country co ON c.country_id = co.id
          JOIN coffee_category cc ON c.id = cc.coffee_id
          JOIN category ca ON ca.id = cc.category_id
        WHERE c.id = $1
        GROUP BY c.id, co.id;`,
      values: [coffeeId],
    };
    const results = await client.query(preparedQuerry);
    return results.rows[0];
  },
  async findAllCountries() {
    const results = await client.query("SELECT * FROM country;");
    return results.rows;
  },
  async findAllCategories() {
    const results = await client.query("SELECT * FROM category;");
    return results.rows;
  },
  async createCoffeeProduct(newCoffee) {
    const preparedQuerry = {
      text: `INSERT INTO coffee (name, reference, description, price_per_kg, country_id, available)
            VALUES ($1, $2, $3, $4, $5, true) RETURNING *`,
      values: [
        newCoffee.name,
        newCoffee.reference,
        newCoffee.description,
        newCoffee.price_per_kg,
        newCoffee.country,
      ],
    };
    const results = await client.query(preparedQuerry);
    // create new array of coffee_id & category_id pairs
    const fkPairs = newCoffee.categories.map((category_id) => [
      results.rows[0].id,
      category_id,
    ]);
    // insert all coffee_id & category_id pairs in database
    await Promise.all(
      fkPairs.map(([coffee_id, category_id]) => {
        const preparedQuery = {
          text: "INSERT INTO coffee_category (coffee_id, category_id) VALUES ($1, $2)",
          values: [coffee_id, category_id],
        };
        return client.query(preparedQuery);
      })
    );
  },
};

export default datamapper;
