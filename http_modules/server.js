const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write("I am sumeet kumar sahoo.");
        res.end();
    }

    if (req.url === '/sumeet'){
        res.write("Improves code reusability .Makes applications modular and scalable. Easier maintenance and debugging. Avoids global namespace pollution");
        res.end();
    }

    if (req.url === '/contact'){
        res.setHeader("Content-Type", "text/plain");
        res.write("Contact Option click here.if required");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log (`Listening on PORT ${PORT}`);
});