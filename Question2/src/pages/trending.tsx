import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  content: string;
  commentCount: number;
}

const TrendingPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/trending-posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching trending posts:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border-b last:border-none">
            <p className="text-lg">{post.content}</p>
            <span className="text-sm text-gray-500">Comments: {post.commentCount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
