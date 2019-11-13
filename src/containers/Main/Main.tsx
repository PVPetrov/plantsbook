import React from "react";
import { Main as MainLayout } from "components";

interface Props {}

const Main: React.FC<Props> = () => {
  return <MainLayout main={() => <div>Main</div>} />;
};

export default Main;
