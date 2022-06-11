import React from 'react';

import { indigo, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import Header from './components/Header';

import Instructions from './pages/Instructions';
import NotFound from './pages/NotFound';
import PopularTopics from './pages/PopularTopics';
import reportWebVitals from './reportWebVitals';

import './styles/index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    background: {
      default: '#071121',
      accent: '#1A2332',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="instructions" element={<Instructions />} />
            <Route path="popular-topics" element={<PopularTopics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
