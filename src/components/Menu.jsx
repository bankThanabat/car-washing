import React from "react";

const Menu = ({ menu }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg">{menu.title}</p>
      {menu.allMenu.map((e) => {
        return <p className="text-gray-400 text-sm">{e.name}</p>;
      })}
    </div>
  );
};

export default Menu;
