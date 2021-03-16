import React from 'react';
import { Box, TextField } from '@material-ui/core';

export default function LinearCongruentialMethod() {
  const [a, setA] = React.useState('');
  const [m, setM] = React.useState('');
  const [c, setC] = React.useState('');
  const [rNeeded, setRNeeded] = React.useState('');
  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    let newResult = '';
    let X = 1;
    let R = 0;

    for (let i = 0; i < rNeeded; i++) {
      X = (a * X + c) % m;
      R = X / m;
      newResult += `R${i + 1} is: ${R}<br/>`;
    }
    setResult(newResult);
  }, [a, c, m, rNeeded]);

  return (
    <Box>
      <TextField label="a" onChange={(e) => setA(Number(e.target.value))} />
      <br />
      <br />
      <TextField label="m" onChange={(e) => setM(Number(e.target.value))} />
      <br />
      <br />
      <TextField label="c" onChange={(e) => setC(Number(e.target.value))} />
      <br />
      <br />
      <TextField label="R Needed" onChange={(e) => setRNeeded(Number(e.target.value))} />
      <br />
      <br />
      result:
      <br />
      <br />
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </Box>
  );
}
