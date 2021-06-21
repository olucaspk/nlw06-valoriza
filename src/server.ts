import express from "express";

const app = express();

app.get("/test", (req,res) => {
    return res.send("get");
});

app.post("/test-post", (req,res) => {
    return res.send("post");
});

app.listen(3000, () => {
    console.log("Server is running");
})

// https://nextlevelweek.com/episodios/node/aula-1/edicao/6