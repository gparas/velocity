import React from 'react';
import { fade } from '@material-ui/core/styles';
import { InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius,
      lineHeight: '40px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
      ]),
      '&$focused': {
        borderColor: theme.palette.primary.main,
        backgroundColor: fade(theme.palette.primary.main, 0.08),
      },
    },
    focused: {},
    input: {
      padding: 0,
      height: 40,
    },
  }),
  { name: 'Input' }
);

export default function Input(props) {
  const { ...other } = props;
  const classes = useStyles();
  return <InputBase classes={classes} {...other} />;
}
