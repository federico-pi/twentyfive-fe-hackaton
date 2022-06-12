import { useEffect, useState } from 'react';

import { FormLabel, List, Radio, Stack } from '@mui/material';
import { FormControl } from '@mui/material';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './styles/App.css';
import './styles/index.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.accent,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  borderRadius: '16px',
}));

const mainLegend = [
  { label: 'Fight fossil fuel crisis', color: 'purple' },
  { label: 'Future of energy', color: 'orange' },
  { label: 'Disillusioned', color: 'green' },
];

const negativeLegend = [
  { label: 'Disillusioned', color: 'orange' },
  { label: 'Gas prices', color: 'purple' },
  { label: 'Future of energy', color: 'green' },
  { label: 'President Biden', color: 'blue' },
];

const positiveLegend = [
  { label: 'Global carbon action', color: 'purple' },
  { label: 'World environment', color: 'orange' },
  { label: 'Gas prices', color: 'blue' },
  { label: 'Future of energy', color: 'red' },
  { label: 'Future', color: 'green' },
];

const neutralLegend = [
  { label: 'Good feature', color: 'blue' },
  { label: 'Fight fossil fuel crisis', color: 'purple' },
  { label: 'Disillusioned', color: 'green' },
  { label: 'Better environment', color: 'orange' },
];

function capitalizeFirstLetter(label) {
  return label[0].toUpperCase() + label.slice(1);
}

function App() {
  const [filtersStatus, setFiltersStatus] = useState([true, true, true]);
  const [value, setValue] = useState('General opinion');

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  // const handle

  const handleFilters = (t) => {
    switch (t.target.id) {
      case 'Positive opinion':
        return setFiltersStatus((prevState) => [
          !prevState[0],
          prevState[1],
          prevState[2],
        ]);
      case 'Negative opinion':
        return setFiltersStatus((prevState) => [
          prevState[0],
          !prevState[1],
          prevState[2],
        ]);
      case 'Neutral opinion':
        return setFiltersStatus((prevState) => [
          prevState[0],
          prevState[1],
          !prevState[2],
        ]);
      default:
        return;
    }
  };

  // useEffect(() => console.log('filterStatus:', filtersStatus), [filtersStatus]);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: 'Quicksand, sans-serif',
            // letterSpacing: '.2rem',
            color: common.white,
            textDecoration: 'none',
            textAlign: 'center',
            paddingTop: 4,
          }}
        >
          Climate Change Mapping
        </Typography>
        <Grid container spacing={2} pt={6}>
          <Grid item xs={3} style={{ maxHeight: 500 }}>
            {/* <Item sx={{ height: '100%' }}> */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontFamily: 'Quicksand, sans-serif',
                letterSpacing: '.2rem',
                color: common.white,
                textDecoration: 'none',
                mb: 3,
              }}
            >
              Legenda
            </Typography>
            <List
              sx={{
                px: 2,
              }}
            >
              {mainLegend.map((legenda, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      width: '30px',
                      height: '20px',
                      mr: 1.5,
                      backgroundColor: legenda.color,
                    }}
                  />
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.1rem',
                      fontSize: '1rem',
                      color: common.white,
                    }}
                  >
                    - {capitalizeFirstLetter(legenda.label)}
                  </Typography>
                </Box>
              ))}
            </List>
            {/* </Item> */}
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ height: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* <GraphViewer></GraphViewer> */}
                <div height={200} width={200} style={{ alignSelf: 'center' }}>
                  {/* <TGraph /> */}
                  <img
                    src={'/generic.png'}
                    alt={'generic'}
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <div style={{ paddingLeft: '40px' }}>
              {/* <Item sx={{ height: '100%' }}> */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontFamily: 'Quicksand, sans-serif',
                  letterSpacing: '.2rem',
                  ml: 2,
                  color: common.white,
                  textDecoration: 'none',
                  mb: 3,
                }}
              >
                Filters
              </Typography>
              <Stack>
                <div>
                  <Radio
                    checked={value === 'General opinion'}
                    onChange={handleChange}
                    value="General opinion"
                    aria-labelledby="general_label"
                  ></Radio>

                  <Typography
                    variant="p"
                    id="general_label"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.1rem',
                      color: common.white,
                    }}
                  >
                    General opinion
                  </Typography>
                </div>

                <div>
                  <Radio
                    checked={value === 'Neutral opinion'}
                    onChange={handleChange}
                    value="Neutral opinion"
                  ></Radio>

                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.1rem',
                      color: common.white,
                    }}
                  >
                    Neutral opinion
                  </Typography>
                </div>

                <div>
                  <Radio
                    checked={value === 'Negative opinion'}
                    onChange={handleChange}
                    value="Negative opinion"
                  ></Radio>

                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.1rem',
                      color: common.white,
                    }}
                  >
                    Negative opinion
                  </Typography>
                </div>

                <div>
                  <Radio
                    checked={value === 'Positive opinion'}
                    onChange={handleChange}
                    value="Positive opinion"
                  ></Radio>

                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.1rem',
                      color: common.white,
                    }}
                  >
                    Positive opinion
                  </Typography>
                </div>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    // <TGraph height={'1vh'} width={'1vw'} />
  );
}

export default App;
