import { Pool } from 'pg'
import { database } from './routes/config.example';

export const pool = new Pool({
  user: database.DB_USER,
  host: database.DB_HOST,
  password: database.DB_PASSWORD,
  database: database.DB_DATABASE,
  port: database.DB_PORT
})