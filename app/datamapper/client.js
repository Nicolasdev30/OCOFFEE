import { Client } from "pg";

const client = new Client({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
});

try {
  await client.connect();
  console.log("🚀 Database connected");
} catch (error) {
  console.log(error);
}

export default client;
