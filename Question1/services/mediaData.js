const axios = require("axios");

const API_BASE_URL = "http://20.244.56.144/test";

const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data.users;
};

const fetchUserPosts = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
  return response.data.posts || [];
};

const fetchPostComments = async (postId) => {
  const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`);
  return response.data.comments || [];
};

module.exports = { fetchUsers, fetchUserPosts, fetchPostComments };
