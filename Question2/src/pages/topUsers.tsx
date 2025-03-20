import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  postCount: number;
}

const TopUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/top-users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching top users:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top 5 Users</h2>
      <ul className="bg-white p-4 rounded-lg shadow-md">
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b last:border-none">
            <span className="font-semibold">{user.name}</span> - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
