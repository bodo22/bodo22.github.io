import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import ChiSquare from './ChiSquare';
import LinearCongruentialMethod from './LinearCongruentialMethod';
import SampleMeanVariance from './SampleMeanVariance';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const tabs = {
  'Chi Square': ChiSquare,
  // 'Confidence Interval': ,
  'Linear Congruential Method': LinearCongruentialMethod,
  'Sample Mean / Variance': SampleMeanVariance,
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          allowScrollButtonsMobile
          scrollButtons="auto"
          variant="scrollable"
        >
          {Object.keys(tabs).map((tab) => {
            return <Tab label={tab} key={tab} />;
          })}
        </Tabs>
      </Box>
      {Object.entries(tabs).map(([key, Component], index) => {
        return (
          <TabPanel value={value} index={index} key={key}>
            <Component />
          </TabPanel>
        );
      })}
    </Box>
  );
}
