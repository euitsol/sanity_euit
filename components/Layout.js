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
  Button,
  Grid,
  CardContent,
  Card,
  CardActions,
  CardActionArea,
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
import { SupportAgent } from '@mui/icons-material';
const breakPoints = [{ width: 1, itemsToShow: 1 }];
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
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
      <Container>
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
      <Container component="main">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Item sx={{ background: 'white' }}>
                {' '}
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/slider1.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        6 Months/1 Year
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        For Seminar
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/slider1.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Apply for
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Online Tutorials
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/slider1.webp"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Free
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        New Courses
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container component="main">
        <Typography variant="h4" textAlign="center">
          Welcome To
        </Typography>
        <Typography variant="h5" textAlign="center">
          European IT Institute
        </Typography>
        <Typography variant="p" textAlign="center">
          European IT started off as an IT and web-based solutions, services and
          web design company in Ireland, Germany, and Bangladesh in 2009. Over
          the years, European IT has delivered successful projects in multiple
          platforms to clients in the US, Canada, UK, Ireland, Norway, Belgium,
          Netherlands, Bangladesh, Australia to name a few countries. The
          founders decided to set up European IT Institute in 2015 to provide
          professional IT training along with IT Skill Enhancement Training
          Program with the outsourcing market for graduates in view to gain work
          that follows international standards and quality. Additionally,
          European IT Institute offers training delivery solutions to
          corporations, institutions, and individuals along with internship for
          graduates.
        </Typography>
        <hr></hr>
      </Container>

      <Container component="main" sx={classes.main}>
        <Typography variant="h3" textAlign="center">
          Our Courses
        </Typography>
        <hr></hr>
        {children}
      </Container>

      <Container component="main">
        <Typography variant="h6" textAlign="center">
          European IT
        </Typography>
        <Typography variant="h5" textAlign="center">
          Facilities
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Item sx={{ background: 'white' }}>
                {' '}
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        24/7 Online Support
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        Each time is very important to us. European IT is giving
                        24/7 online support for the students for any information
                        review and solving problem.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lifetime Support
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        By the end of the course, European IT provides life time
                        support to its students for problem solving and
                        collaborate.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Practice Lab Support
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        European IT is giving students a practice lab at the end
                        of classes or at any time to practice. Where students
                        will have the opportunity to practice for a long time.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} sx={{ maxHeight: 400 }}>
              <Item sx={{ background: 'white' }}>
                {' '}
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Class Video
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        Video for each class of European IT Institute is stored
                        and provided to students. This will allow students to
                        better understand the contents of the class.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Job Placement
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        European IT manage job for talented students through
                        their job placement cell at European IT's own firm as
                        well as other firms.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Job Placement
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        European IT manage job for talented students through
                        their job placement cell at European IT's own firm as
                        well as other firms.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box component="footer" sx={classes.footer}>
        <Typography>All right reserved. Sanity Euit</Typography>
      </Box>
    </>
  );
}
