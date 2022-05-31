import express from 'express';

const app = express();

app.get("/", (request, response) => {
    response.json({message: "Hello World Node"})
})

app.listen(3333, () => console.log("Server is running!"));