const express = require("express");
const path = require("path");
const cors = require("cors");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const BlogRepository = require("./repository/blog-repository");

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

    // const blogRepo = new BlogRepository();
    // const blog = await blogRepo.create({
    //     title: "2nd Day of Developing",
    //     author: "drkspark12",
    //     content: "Changing date format",
    //     tags: ["dev"],
    //     userId: "umasree2",
    // });
    // const blog = await blogRepo.destroy("643441312fcd376c6462824e");
    // const blogs = await blogRepo.getBlogsOfUser("umasree");
    // console.log(blogs);
});
