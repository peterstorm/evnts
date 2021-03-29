import React from 'react';
import classes from './error-alert.module.css';

type Props = {
  children: React.ReactNode;
}

const ErrorAlert: React.FC<Props> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
