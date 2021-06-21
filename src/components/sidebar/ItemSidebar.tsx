import React from "react";
import Icon from "../icon/Icon";
interface IconPro {
  iconName: string;
  link: string;
  name?: string;
}

const ItemSidebar: React.FC<IconPro> = ({ iconName, link, name }) => {
  return (
    <div>
      <li key={name}>
        <a href={link}>
          <Icon iconName={iconName} color={"#4a4a4a"} size={30} />
        </a>
      </li>
    </div>
  );
};

export default ItemSidebar;
