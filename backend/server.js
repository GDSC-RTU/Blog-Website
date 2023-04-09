const express = require("express");
const path = require("path");
const cors = require("cors");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const Blog = require("./models/blog");

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello World!");
});

app.listen(PORT, async () => {
    console.log(`Server started on http://localhost:${PORT}`);
    await connect();
    console.log("DB Connected");

    // const blog = await Blog.create({
    //     title: "Blog With Commentss",
    //     author: "drkspark",
    //     content: "Hello World",
    //     tags: ["WebDev", "Trying First Time"],
    // });
    // console.log(blog);
});
