import React from 'react';
import { Box, TextField } from '@material-ui/core';

export default function SampleMeanVariance() {
  const [samples, setSamples] = React.useState('');
  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    let newResult = '';
    const arr = samples.split(',').map((n) => Number(n));
    const mean = arr.reduce((curr, n) => (curr += n), 0) / arr.length;
    newResult += `Sample Mean: ${mean}<br/>`;

    const Ssquared =
      arr.reduce((curr, n) => (curr += (n - mean) * (n - mean)), 0) / (arr.length - 1);
    newResult += `Sample Variance S²: ${Ssquared}<br/>`;

    setResult(newResult);
  }, [samples]);

  return (
    <Box>
      <TextField label="Samples" onChange={(e) => setSamples(e.target.value)} />
      <br />
      <br />
      result:
      <br />
      <br />
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </Box>
  );
}
