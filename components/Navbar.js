/** @format */

import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Link from "next/link";

const Navbar = (props) => {
  const nav = [
    { name: "home", Icon: <HomeRoundedIcon />, getaway: "/" },

    {
      name: "My Network",
      Icon: <ConnectWithoutContactIcon />,
      getaway: "/myNetwork",
    },
    { name: "jobs", Icon: <WorkIcon />, getaway: "/job" },
    { name: "Messages", Icon: <ChatIcon />, getaway: "/msg" },
    { name: "Notification", Icon: <NotificationsActiveIcon />, getaway: "/" },
    {
      avatar:
        "https://media-exp2.licdn.com/dms/image/D4D35AQFtphEOf49HYg/profile-framedphoto-shrink_400_400/0/1657620737811?e=1658361600&v=beta&t=nPlrNr9GR_yzW5ce5oNgPCwXPdGzwGlDOqy_tl57ed4",
      name1: "Mir",
    },
  ];

  return (
    <>
      <div className="xxl:flex-col   md:flex    sticky top-0  justify-around  bg-white border-solid border-b-[0.1px] border-gray-300 ">
        <div className="flex items-center justify-center">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            className="object-contain h-[2.6rem]"
          />
          <div className="px-6 py-1 bg-blue-50 ">
            <SearchIcon className="text-black mr-[1rem]" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-inherit"
            />
          </div>
        </div>

        <div className="flex items-center justify-center ">
          {nav.map((nav, index) => {
            return (
              <Link href={`${nav.getaway}`} key={index}>
                <a className="mr-[0.5rem] hover:text-[#0a66c2] cursor-pointer flex flex-col text-small items-center mt-1 px-1 py-1 lg:px-1 lg:py-1 text-[0.8rem] font-normal">
                  {nav.Icon}
                  <span className="hidden lg:block">{nav.name}</span>

                  <img
                    src={nav.avatar}
                    alt=""
                    className="rounded-full w-[2.5rem]"
                  />

                  <span className=" text-[10px]">{nav.name1}</span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
