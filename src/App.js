import { CenterFocusStrong } from '@mui/icons-material';
import { List } from '@mui/material';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/system';

import { Visx } from './components/Visx';

import './styles/App.css';
import './styles/index.css';

const AccentSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.background.accent,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.background.accent,
  },
}));

const legendas = [
  {
    label: 'Some label',
    color: 'green',
  },
  {
    label: 'Some label',
    color: 'yellow',
  },
  {
    label: 'Some label',
    color: 'orange',
  },
];

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={2} pt={6}>
          <Grid item xs={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontFamily: 'Quicksand, sans-serif',
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                mb: 4,
              }}
            >
              Legenda:
            </Typography>
            <List>
              {legendas.map((legenda) => (
                <Box
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
                      letterSpacing: '.2rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    - {legenda.label}
                  </Typography>
                </Box>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Visx width={700} height={650} />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontFamily: 'Quicksand, sans-serif',
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                mb: 4,
              }}
            >
              Filters:
            </Typography>

            <FormGroup
              sx={{
                fontFamily: 'Quicksand, sans-serif',
              }}
            >
              <FormControlLabel
                control={<AccentSwitch />}
                label={
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.2rem',
                      color: 'inherit',
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
                control={<AccentSwitch />}
                label={
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.2rem',
                      color: 'inherit',
                    }}
                  >
                    Negative opinion
                  </Typography>
                }
                sx={{
                  fontFamily: 'Quicksand, sans-serif',
                  mb: 2,
                }}
              />
              <FormControlLabel
                control={<AccentSwitch />}
                label={
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 500,
                      fontFamily: 'Quicksand, sans-serif',
                      letterSpacing: '.1rem',
                      color: 'inherit',
                    }}
                  >
                    Neutral opinion
                  </Typography>
                }
                sx={{
                  fontFamily: 'Quicksand, sans-serif',
                  mb: 2,
                }}
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
