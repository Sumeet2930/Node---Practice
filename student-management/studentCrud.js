const pool = require("./db");

async function addStudent(name, age) {
  const query = "INSERT INTO students (name, age) VALUES ($1, $2) RETURNING *";
  const values = [name, age];
  const result = await pool.query(query, values);
  console.log("Student added:", result.rows[0]);
  return result.rows[0];
}

async function init() {
  const createTable = `
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      age INTEGER
    )`;
  await pool.query(createTable);
}

async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students ORDER BY id");
  console.log("All students:", result.rows);
  return result.rows;
}

async function updateStudent(id, name, age) {
  const query = "UPDATE students SET name = $1, age = $2 WHERE id = $3 RETURNING *";
  const values = [name, age, id];
  const result = await pool.query(query, values);
  console.log("Updated student:", result.rows[0]);
  return result.rows[0];
}

async function deleteStudent(id) {
  const result = await pool.query("DELETE FROM students WHERE id = $1 RETURNING *", [id]);
  console.log("Deleted student:", result.rows[0]);
  return result.rows[0];
}

async function runCRUD() {
  try {
    await init();
    const added = await addStudent("Rahul", 21);
    await getAllStudents();
    const idToUpdate = (added && added.id) ? added.id : 1;
    await updateStudent(idToUpdate, "Rahul Sharma", 22);
    await getAllStudents();
    await deleteStudent(idToUpdate);
    await getAllStudents();
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await pool.end();
  }
}

runCRUD();