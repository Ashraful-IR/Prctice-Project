import 'dotenv/config';
import { Pool } from "pg";

export const connectDb = new Pool({
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
});

export const testConnection = async () => {
    try {
        const res = await connectDb.query("SELECT NOW()");
        console.log(" Database connected", res.rows[0].now);
    } catch (err) {
        console.log("Database Not Connected ", err);
    }
}