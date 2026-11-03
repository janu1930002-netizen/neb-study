
import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(
  process.cwd(),
  "ComputerSceince.db"
);

const db = new Database(dbPath, {
  readonly: true,
});

console.log("Database connected:", dbPath);

export default db;
