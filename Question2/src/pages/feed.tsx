import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  content: string;
  timestamp: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch("http://localhost:8080/feed")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error("Error fetching feed:", err));
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Update feed every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border-b last:border-none">
            <p className="text-lg">{post.content}</p>
            <span className="text-sm text-gray-500">{new Date(post.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
