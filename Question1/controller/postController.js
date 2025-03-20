const Post = require("../model/PostModel");
const { fetchUserPosts, fetchPostComments } = require("../services/mediaData");

const getPosts = async (req, res) => {
  try {
    const { type } = req.query;
    if (!type || (type !== "latest" && type !== "popular")) {
      return res.status(400).json({ error: "Invalid query parameter. Use type=latest or type=popular" });
    }

    let allPosts = [];
    for (let userId = 1; userId <= 50; userId++) {
      const posts = await fetchUserPosts(userId);
      for (let post of posts) {
        const comments = await fetchPostComments(post.id);
        allPosts.push({ ...post, commentCount: comments.length });
      }
    }

    if (type === "latest") {
      allPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      return res.json({ posts: allPosts.slice(0, 5) });
    }

    if (type === "popular") {
      const maxComments = Math.max(...allPosts.map(post => post.commentCount));
      const popularPosts = allPosts.filter(post => post.commentCount === maxComments);
      return res.json({ posts: popularPosts });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error fetching posts" });
  }
};

module.exports = { getPosts };
