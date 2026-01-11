import express from "express";

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));
app.get("/about", (req, res) => res.send("<h1>Hello About Page</h1>"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}😍`);    
});