const User = require("../model/UserModel");
const { fetchUsers, fetchUserPosts } = require("../services/mediaData");

const getTopUsers = async (req, res) => {
  try {
    const users = await fetchUsers();
    let userPostCounts = [];

    for (let userId in users) {
      const posts = await fetchUserPosts(userId);
      userPostCounts.push({ userId: Number(userId), name: users[userId], postCount: posts.length });
    }

    userPostCounts.sort((a, b) => b.postCount - a.postCount);
    const topUsers = userPostCounts.slice(0, 5);

    res.json({ topUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error fetching top users" });
  }
};

module.exports = { getTopUsers };
