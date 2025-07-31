import { Pool } from "pg";

// Create a connection pool with SSL configuration for Prisma Data Platform
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  // Add connection timeout
  connectionTimeoutMillis: 10000,
  // Add idle timeout
  idleTimeoutMillis: 30000,
});

export default pool;
