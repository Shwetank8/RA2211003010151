import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const fetchTopUsers = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/top-users`);
  return data;
};

export const fetchTrendingPosts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/posts?type=popular`);
  return data;
};

export const fetchFeed = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/posts?type=latest`);
  return data;
};
