import React, { Fragment } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Input } from '../../components';

export default function Map() {
  return (
    <Fragment>
      <Typography variant="h1">Map</Typography>
      <Typography variant="h2" gutterBottom>
        Start editing to see some magic happen!
      </Typography>
      <Input placeholder="search" />
      <Button color="primary">Button</Button>
    </Fragment>
  );
}
