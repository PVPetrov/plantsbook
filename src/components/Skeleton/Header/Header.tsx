import React, { FC } from "react";
import "./Header.sass";

interface Props {
  header: FC;
}

const Header: React.FC<Props> = ({ header = null }) => {
  return (
    <header>
      <div className="header-container">
        <img src="/assets/img/plant.jpg" alt="Plant" />
        {header}
      </div>
    </header>
  );
};

export default Header;
