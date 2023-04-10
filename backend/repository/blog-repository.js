const Blog = require("../models/blog");

class BlogRepository {
    // To create a Blog
    async create(data) {
        try {
            const blog = await Blog.create(data);
            return blog;
        } catch (error) {
            console.log(error);
        }
    }

    // To update the Blog
    async update(blogId, data) {
        try {
            const blog = await Blog.update(blogId, data, { new: true });
            return blog;
        } catch (error) {
            console.log(error);
        }
    }

    // To fetch all the Blogs
    async getAll() {
        try {
            const blogs = await Blog.find();
            return blogs;
        } catch (error) {
            console.log(error);
        }
    }

    // To get a particular blog based on the BlogId
    async get(blogId) {
        try {
            const blog = await Blog.findById(blogId);
            return blog;
        } catch (error) {
            console.log(error);
        }
    }

    // To get all the Blogs of a particular User
    async getBlogsOfUser(_userId) {
        try {
            const blogs = await Blog.find({ userId: _userId });
            return blogs;
        } catch (error) {
            console.log(error);
        }
    }

    // To delete a Blog
    async destroy(blogId) {
        try {
            // This will return the deleted data if the data was deleted, else will return null
            const res = await Blog.findByIdAndRemove(blogId);
            // This will tell if the Blog was successfully deleted or Not
            return res != null;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BlogRepository;
