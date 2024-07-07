import { connect as planetscaleConnect } from "@planetscale/database";
import { drizzle as planetscaleServerless } from "drizzle-orm/planetscale-serverless";
import { neon as neonConnect } from "@neondatabase/serverless";
import { drizzle as neonServerless } from "drizzle-orm/neon-http";
import "dotenv/config";

// Initialize PostgreSQL (PlanetScale) database with environment variable
const planetscaleSql = planetscaleConnect({
  url: process.env.DATABASE_URL,
});
const planetscaleDatabase = planetscaleServerless(planetscaleSql);

// Initialize MySQL (Neon) database with environment variable
const neonSql = neonConnect(process.env.DATABASE_URL!);
const neonDatabase = neonServerless(neonSql);

export { planetscaleDatabase, neonDatabase };
