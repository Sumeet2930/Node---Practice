const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "college",
  password: "Sum2930@",
  port: 5432,
});

async function main() {
  await client.connect();
  console.log("Connected to Database");

  // INSERT
  await client.query(
    "INSERT INTO student (name, age) VALUES ($1, $2)",
    ["Ravi", 23]
  );
  console.log("Inserted Ravi");

  // READ
  const res = await client.query("SELECT * FROM student");
  console.table(res.rows);

  // UPDATE
  await client.query(
    "UPDATE student SET age = $1 WHERE name = $2",
    [24, "Ravi"]
  );
  console.log("Updated Ravi age");

  // DELETE
  await client.query(
    "DELETE FROM student WHERE name = $1",
    ["Ravi"]
  );
  console.log("Deleted Ravi");

  await client.end();
  console.log("Done");
}

main();
