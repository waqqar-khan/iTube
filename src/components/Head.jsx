import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-2 shadow-md">
      <div className="flex col-span-2">
        <img
          onClick={() => handleToggleMenu()}
          className="h-10 mx-2 cursor-pointer"
          alt="hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-10"
          alt="youtube"
          src="https://www.svgrepo.com/show/13671/youtube.svg"
        />
      </div>
      <div className="col-span-8 px-12 flex items-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200">
          <img className="h-6 align-middle" alt="search" src="https://www.svgrepo.com/show/7109/search.svg" />
        </button>
      </div>
      <div className="col-span-2">
        <img
          className="h-10"
          alt="user-photo"
          src="https://www.svgrepo.com/show/486506/user-profile-filled.svg"
        />
      </div>
    </div>
  );
};

export default Head;
