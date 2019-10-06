import React from 'react';
import { fade } from '@material-ui/core/styles';
import { InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  theme => ({
    root: {
      '&$focused $input': {
        borderColor: theme.palette.primary.main,
        backgroundColor: fade(theme.palette.primary.main, 0.08),
      },
    },
    focused: {},
    input: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create([
        'border-color',
        'background-color',
      ]),
    },
  }),
  { name: 'Input' }
);

export default function Input(props) {
  const { ...other } = props;
  const classes = useStyles();
  return <InputBase classes={classes} {...other} />;
}
