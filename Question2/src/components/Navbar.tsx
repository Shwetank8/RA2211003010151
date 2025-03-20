import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Social Media Analytics</h1>
        <ul className="flex space-x-4">
          <li><Link to="/top-users" className="hover:underline">Top Users</Link></li>
          <li><Link to="/trending-posts" className="hover:underline">Trending Posts</Link></li>
          <li><Link to="/feed" className="hover:underline">Feed</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
