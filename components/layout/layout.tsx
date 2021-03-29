import React, {Fragment} from "react";

import MainHeader from './main-header';

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;


