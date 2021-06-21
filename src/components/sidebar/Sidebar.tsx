import React from "react";
import ItemSidebar from "./ItemSidebar";
import { StyleSidebar } from "./Styles";

const items = [
  { iconName: "home-outline", link: "/", name: "home" },
  { iconName: "layers", link: "/statistics", name: "statistics" },
  { iconName: "basket", link: "/basket", name: "basket" },
  { iconName: "users", link: "/users", name: "users" },
  { iconName: "cog", link: "/setting", name: "setting" },
  { iconName: "logout", link: "/logout", name: "logout" },
];

const Sidebar: React.FC = () => {
  return (
    <StyleSidebar>
      {items.map((item) => (
        <ItemSidebar
          name={item.name}
          iconName={item.iconName}
          link={item.link}
        />
      ))}
    </StyleSidebar>
  );
};

export default Sidebar;
