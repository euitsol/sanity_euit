// import { NextPlanOutlined } from '@mui/icons-material';
import {
  AppBar,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Box,
  Typography,
  Link,
  MenuItem,
  Menu,
  IconButton,
  Tabs,
  Tab,
  CardMedia,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Head from 'next/head';
import NextLink from 'next/link';
import * as React from 'react';
import classes from '../utils/classes';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import styles from '../styles/carosoul.module.css';
import { height } from '@mui/system';
const breakPoints = [{ width: 1, itemsToShow: 1 }];
export default function layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontweight: 400,
        margin: '1red 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontweight: 400,
        margin: '1red 0',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <>
      <Head>
        <title>{title ? `${title} - Sanity Euit` : 'Sanity Euit'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <AppBar position="static" sx={classes.appbar}>
        <Toolbar sx={classes.toolbar}>
          <CardMedia
            sx={classes.logo}
            component="img"
            image={'images/logo.png'}
            title="ok"
          ></CardMedia>
          {/* <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Your logo."
            src={logo}
          /> */}

          <Container>
            <Tabs textColor="inherit" sx={classes.tabs}>
              <NextLink href="/" passHref>
                <Tab label="Home"></Tab>
              </NextLink>
              <NextLink href="#" passHref>
                <Tab label="About Us"></Tab>
              </NextLink>
              <NextLink href="#" passHref>
                <Tab label="Courses"></Tab>
              </NextLink>
              <NextLink href="#" passHref>
                <Tab label="Events"></Tab>
              </NextLink>
              <NextLink href="#" passHref>
                <Tab label="Gallery"></Tab>
              </NextLink>
              <NextLink href="#" passHref>
                <Tab label="News"></Tab>
              </NextLink>
              <NextLink href="#" passHref>
                <Tab label="Contact Us"></Tab>
              </NextLink>
            </Tabs>
          </Container>
          {/* <NextLink href="/" passHref>
            <Link>
              <Typography sx={classes.brand}>European IT Institute</Typography>
            </Link>
          </NextLink> */}
        </Toolbar>
      </AppBar>
      <Container maxWidth="1400px">
        <div className={styles.carosoul}>
          <Carousel breakPoints={breakPoints}>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={'images/slider2.webp'}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={'images/slider2.webp'}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={'images/slider2.webp'}
                title="ok"
              ></CardMedia>
            </Item>
          </Carousel>
        </div>
      </Container>
      <Container component="main" sx={classes.main}>
        <Typography variant="h3" textAlign="center">
          Our Courses
        </Typography>
        <hr></hr>
        {children}
      </Container>
      <Box component="footer" sx={classes.footer}>
        <Typography>All right reserved. Sanity Euit</Typography>
      </Box>
    </>
  );
}
