import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 shadow-lg">
      <ul className="cursor-pointer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h2 className="font-bold pt-5">Subscriptions</h2>
      <ul>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Gaming</li>
      </ul>
      <h2 className="font-bold pt-5">Explore</h2>
      <ul>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
