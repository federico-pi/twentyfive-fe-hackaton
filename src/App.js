import { CenterFocusStrong } from '@mui/icons-material';
import { List } from '@mui/material';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { Box, height } from '@mui/system';

// import GraphViewer from './components/GraphViewer';
import { Visx } from './components/Visx';

import './styles/App.css';
import './styles/index.css';

const AccentSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.primary,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.primary,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.accent,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
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
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: 'Quicksand, sans-serif',
            letterSpacing: '.2rem',
            color: common.white,
            textDecoration: 'none',
            textAlign: 'center',
            mt: 4,
            padding: 2,
          }}
        >
          Climate change topic mapping
        </Typography>
        <Grid container spacing={2} pt={6}>
          <Grid item xs={3}>
            <Item sx={{ height: '100%' }}>
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
                        letterSpacing: '.1rem',
                        fontSize: '1rem',
                        color: common.white,
                      }}
                    >
                      - {legenda.label}
                    </Typography>
                  </Box>
                ))}
              </List>
            </Item>
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
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item sx={{ height: '100%' }}>
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
                Filters
              </Typography>

              <FormGroup
                sx={{
                  fontFamily: 'Quicksand, sans-serif',
                  px: 2,
                }}
              >
                <FormControlLabel
                  control={<AccentSwitch />}
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
                  control={<AccentSwitch />}
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
                    fontFamily: 'Quicksand, sans-serif',
                    mb: 2,
                  }}
                />
              </FormGroup>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
