const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function run() {
  await client.connect();
  const db = client.db('testdb');
  const users = db.collection('users');

  await users.insertOne({ name: "Sumeet" });

  const data = await users.find().toArray();
  console.log(data);
}

run();
