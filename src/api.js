const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

import { Pool } from 'pg'

const database = {
  DB_USER: "huodtjvg",
  DB_HOST: "	castor.db.elephantsql.com",
  DB_PASSWORD: "1OgNMPOOkLpntXM63CB3yS1fVPRT-mKw",
  DB_DATABASE: "huodtjvg",
  DB_PORT: 5432
}

export const pool = new Pool({
  user: database.DB_USER,
  host: database.DB_HOST,
  password: database.DB_PASSWORD,
  database: database.DB_DATABASE,
  port: database.DB_PORT
})

 

router.get("/", async (req, res)  => {
  try {
    const response = await pool.query("SELECT * from datawarehouse");
     res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
     res.status(500).json("Internal server error");
  }
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);


