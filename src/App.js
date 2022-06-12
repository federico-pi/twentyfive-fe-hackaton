import React, { useCallback, useEffect, useState } from 'react';

import { List, Radio } from '@mui/material';
import { FormControl } from '@mui/material';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
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

function App() {
  const [graph, setGraph] = useState('general');
  const [legend, setLegend] = useState(mainLegend);

  const handleGraph = (g) => {
    setGraph(g);

    switch (g) {
      case 'general':
      default:
        return setLegend(mainLegend);
      case 'positive':
        return setLegend(positiveLegend);
      case 'neutral':
        return setLegend(neutralLegend);
      case 'negative':
        return setLegend(negativeLegend);
    }
  };

  function capitalizeFirstLetter(label) {
    return label[0].toUpperCase() + label.slice(1);
  }

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
              {legend.map((legenda, index) => (
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
                <div height={200} width={200} style={{ alignSelf: 'center' }}>
                  {graph === 'general' && (
                    <img
                      src={'/general.png'}
                      alt={'general'}
                      width={'100%'}
                      height={'100%'}
                    />
                  )}
                  {graph === 'positive' && (
                    <img
                      src={'/positive.png'}
                      alt={'positive'}
                      width={'100%'}
                      height={'100%'}
                    />
                  )}
                  {graph === 'neutral' && (
                    <img
                      src={'/neutral.png'}
                      alt={'neutral'}
                      width={'100%'}
                      height={'100%'}
                    />
                  )}
                  {graph === 'negative' && (
                    <img
                      src={'/negative.png'}
                      alt={'negative'}
                      width={'100%'}
                      height={'100%'}
                    />
                  )}
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
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    control={<Radio />}
                    checked={true}
                    value="General opinion"
                    label={
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
                        General opinion
                      </Typography>
                    }
                    sx={{
                      mb: 2,
                    }}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="Positive opinion"
                    label={
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
                    }
                    sx={{
                      mb: 2,
                    }}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value={'Neutral opinion'}
                    label={
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
                    }
                    sx={{
                      mb: 2,
                    }}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value={'Negative opinion'}
                    label={
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
                    }
                    sx={{
                      mb: 2,
                    }}
                  />
                </RadioGroup>
              </FormControl>
              {/* </Item> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    // <TGraph height={'1vh'} width={'1vw'} />
  );
}

export default App;
