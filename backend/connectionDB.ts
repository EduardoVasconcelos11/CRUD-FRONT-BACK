import { Pool } from 'pg';

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'agenda-telefonica',
  password: '159753',
  port: 5432, // Porta padrão do PostgreSQL
});

export default pool;
