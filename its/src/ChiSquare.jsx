import React from 'react';
import { Box, TextField } from '@material-ui/core';

export default function ChiSquare() {
  const [observed, setObserved] = React.useState('');
  const [expected, setExpected] = React.useState('');
  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    let ChiS = 0;

    for (let i = 0; i < observed.length; i++) {
      const currObserved = observed[i];
      const currExpected = expected[i] ?? expected[0];
      ChiS = ChiS + ((currObserved - currExpected) * (currObserved - currExpected)) / currExpected;
    }
    setResult(ChiS);
  }, [expected, observed]);

  return (
    <Box>
      <TextField
        label="observed"
        onChange={(e) => setObserved(e.target.value.split(',').map((n) => Number(n)))}
      />
      <br />
      <br />
      <TextField
        label="expected"
        onChange={(e) => setExpected(e.target.value.split(',').map((n) => Number(n)))}
      />
      <br />
      <br />
      result:
      {result}
    </Box>
  );
}
