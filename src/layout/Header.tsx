import { NavLink, Outlet } from "react-router";
import HeaderContext from "../contexts/Context";
import { useContext } from "react";

const Header = () => {
  const context = useContext(HeaderContext);
  return (
    <>
      <div className={`fixed z-10 top-0 right-0 left-0 ${context?.isWelcome ? 'bg-transparent' : 'bg-black'} backdrop-blur-sm`}>
        <ul className={`flex flex-row flex-nowrap items-center justify-end text-white bg-transparent pr-8 ${context?.isWelcome ? 'bg-transparent' : 'bg-gray-500/10'}`}>
          <li className="m-2  py-2 rounded-full text-sm/6 font-semibold text-white">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-black bg-white hover:cursor-pointer"
                  : "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-white hover:bg-gray-600 hover:cursor-pointer"
              }
            >
              Welcome
            </NavLink>
          </li>
          <li className="m-2  py-2 rounded-full text-sm/6 font-semibold text-white">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive
                  ? "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-black bg-white hover:cursor-pointer"
                  : "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-white hover:bg-gray-600 hover:cursor-pointer"
              }
            >
              About me
            </NavLink>
          </li>
          <li className="m-2  py-2 rounded-full text-sm/6 font-semibold text-white">
            <NavLink
              to="/skill"
              end
              className={({ isActive }) =>
                isActive
                  ? "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-black bg-white hover:cursor-pointer"
                  : "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-white hover:bg-gray-600 hover:cursor-pointer"
              }
            >
              Skills{" "}
            </NavLink>
          </li>
          <li className="m-2 py-2 rounded-full text-sm/6 font-semibold text-white">
            <NavLink
              to="/portfolio"
              end
              className={({ isActive }) =>
                isActive
                  ? "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-black bg-white hover:cursor-pointer"
                  : "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-white hover:bg-gray-600 hover:cursor-pointer"
              }
            >
              Portfolio{" "}
            </NavLink>
          </li>
          <li className="m-2  py-2 rounded-full text-sm/6 font-semibold text-white">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive
                  ? "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-black bg-white hover:cursor-pointer"
                  : "m-2 px-4 py-3 rounded-full text-sm/6 font-semibold text-white hover:bg-gray-600 hover:cursor-pointer"
              }
            >
              Contact me{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
