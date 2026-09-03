import app from "./app.js";
import 'dotenv/config';
import { testConnection } from "./config/db.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
    testConnection();
}); 