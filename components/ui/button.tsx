import Link from 'next/link';
import React from 'react';

import classes from './button.module.css';

type Props = {
  link?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ link, onClick, children } ) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return <button className={classes.btn} onClick={onClick}>{children}</button>
}

export default Button;
