import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({buttontext}) {
  return (
      <Button sx={{color: 'black', 
      backgroundColor:'#dbc2cd',
      width: '120px',
    }} 
      variant="contained">{buttontext}</Button>
  );
}