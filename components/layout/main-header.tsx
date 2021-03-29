import React from 'react';
import Link from 'next/link';

import classes from './main-header.module.css';

type Props = {
}

const MainHeader: React.FC<Props> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>evnts</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events/'>all evnts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
