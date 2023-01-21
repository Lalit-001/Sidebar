import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-dark-purple pt-6 px-4 relative`}
      >
        <img
          src="./src/assets/control.png"
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-3 rounded-full border-2 border-dark-purple w-7 ${
            !open && "rotate-180"
          }`}
        />
        <div className="flex items-center gap-x-2">
          <img
            src="./src/assets/logo.png"
            className={` cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`font-semibold text-xl text-white ${
              !open && "scale-0"
            } duration-300`}
          >
            Desigener
          </h1>
        </div>
        <ul className="mt-6">
          {Menus.map((menu, i) => {
            return (
              <li
                key={i}
                className={`flex gap-x-2 hover:bg-light-white rounded-md p-2 text-sm ${
                  menu.gap && "mt-4"
                } cursor-pointer`}
              >
                <img src={`./src/assets/${menu.src}.png`} />
                <span
                  className={`text-white ${
                    !open && "hidden"
                  } origin-left duration-300 `}
                >
                  {menu.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-screen p-7 flex-1">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
    </div>
  );
};

export default App;
