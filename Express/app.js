import express from "express";

const app = express();



app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));
app.get("/about", (req, res) => res.send("<h1>Hello About Page</h1>"));
app.get("/contact", (req, res) => {
    
    const __filename = new URL (import.meta.url);
    console.log(__filename);
    
    res.send("Hii");
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`User: ${username}`);
});


// const PORT = 3000;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}😍`); 
       
});