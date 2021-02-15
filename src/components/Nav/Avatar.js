import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAvatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Avatar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  );
}

export default Avatar

