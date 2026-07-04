const pool = require("./config/db");

async function test() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Connected to Supabase!");
    console.log(result.rows);
  } catch (err) {
    console.error(err);
  }
}

test();