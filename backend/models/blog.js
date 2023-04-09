const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Can't create Blog without Title"],
        },
        author: {
            type: String,
            required: [true, "Can't create Blog without Author"],
        },
        content: {
            type: String,
            required: [true, "Can't create Blog without Content"],
        },
        tags: [
            {
                type: String,
            },
        ],
        // So as to identfiy the owner of the blog and will help in retrieval of blogs
        // User Id has to be fetched from FireBase user DB, since we will be uisng it for authentication.
        userId: {
            type: String,
        },
        date: {
            type: String,
        },
        likes: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

// This will extract Date from the createAt and store as dd-mm-yyyy
blogSchema.pre("save", function (next) {
    let date = JSON.stringify(this.createdAt)
        .substring(1, 11)
        .split("-")
        .reverse()
        .join("-");

    this.date = date;
    next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
