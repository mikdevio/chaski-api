import app from "./app.js";
import { mongoDBConnect, initializeDB } from "./config/db.js";

const port = process.env.PORT || 3000;

// Database connection and initialization
mongoDBConnect()
  .then(() => initializeDB())
  .catch((err) => console.log("Database connection error:", err));

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
