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
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";
import NextLink from "next/link";
import * as React from "react";
import classes from "../utils/classes";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import styles from "../styles/carosoul.module.css";

import { height, textAlign } from "@mui/system";
import { SupportAgent } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import LaptopIcon from "@mui/icons-material/Laptop";
import HailIcon from "@mui/icons-material/Hail";
// import { AccessTimeIcon } from '@mui/icons-material/AccessTime';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

const breakPoints = [{ width: 1, itemsToShow: 1 }];
const breakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
// const [value, setValue] = React.useState(0);
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
export default function layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontweight: 400,
        margin: "1red 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontweight: 400,
        margin: "1red 0",
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  return (
    <>
      <Head>
        <title>{title ? `${title} - Sanity Euit` : "Sanity Euit"}</title>
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
            image={"images/logo.png"}
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
          {/* Menu header Section */}
          <Container>
            <Tabs
              textColor="inherit"
              sx={classes.tabs}
              // value={value}
              // onChange={(e, value) => setValue(value)}
              // indicatorColor="secondary"
            >
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
      {/* Slider Section */}
      {/* <Container> */}
      <div className={styles.carosoul}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <CardMedia
              sx={classes.carosoul}
              component="img"
              image={"images/Big-Data-Courses.jpg"}
              title="ok"
            ></CardMedia>
          </Item>
          <Item>
            <CardMedia
              sx={classes.carosoul}
              component="img"
              image={"images/Big-Data-Courses.jpg"}
              title="ok"
            ></CardMedia>
          </Item>
          <Item>
            <CardMedia
              sx={classes.carosoul}
              component="img"
              image={"images/Big-Data-Courses.jpg"}
              title="ok"
            ></CardMedia>
          </Item>
        </Carousel>
      </div>
      {/* </Container> */}
      {/* Below Slider Section */}
      <Container component="main">
        <Box sx={{ flexGrow: 1 }} className={styles.slide_after}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} style={{width:'100%'}}>
              <Item sx={{ background: "white" }}  style={{width:'100%'}}>
                <Card sx={{ maxWidth: '100%' }}>
                  <CardActionArea sx={classes.commone_iconclass}>
                    <HailIcon sx={classes.courses_icon} />
                    <CardMedia
                    // component="img"
                    // height="140"
                    // image="images/laptop-svgrepo-com.svg"
                    // alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.courses_duration}
                      >
                        6 Months/1 Year
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={classes.courses_tittle}
                      >
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
                  <CardActionArea sx={classes.commone_iconclass}>
                    <GroupsIcon sx={classes.courses_icon} />
                   
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.courses_duration}
                      >
                        Apply for
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={classes.courses_tittle}
                      >
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
                  <CardActionArea sx={classes.commone_iconclass}>
                    <LaptopIcon sx={classes.courses_icon} />
                    <CardMedia
                    // component="img"
                    // height="140"
                    // image="images/slider1.webp"
                    // alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.courses_duration}
                      >
                        Free
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={classes.courses_tittle}
                      >
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
      {/* Welcom  Section */}
      <Container component="main" sx={classes.welcome_section}>
        <Typography variant="h4" textAlign="center" sx={classes.welcome_text}>
          Welcome To
        </Typography>
        <Typography variant="h5" textAlign="center" sx={classes.Institute_name}>
          European IT Institute
        </Typography>
        <Typography
          variant="p"
          alignItems="center"
          sx={classes.europeanit_detale}
        >
          European IT started off as an IT and web-based solutions,
          services and{" "}
          <a href="https://europeanit-inst.com/course/web-design/">
            web design
          </a>{" "}
          company in Ireland, Germany, and Bangladesh in 2009. Over the years,
          European IT has delivered successful projects in multiple platforms to
          clients in the US, Canada, UK, Ireland, Norway, Belgium, Netherlands,
          Bangladesh, Australia to name a few countries. The founders decided to
          set up European IT Institute in 2015 to provide professional IT
          training along with IT Skill Enhancement Training Program with the
          outsourcing market for graduates in view to gain work that follows
          international standards and quality. Additionally,
          <a href="https://europeanit-inst.com/" sx={classes.delate_text_link}>
            European IT Institute
          </a>{" "}
          offers training delivery solutions to corporations, institutions, and
          individuals along with internship for graduates.
        </Typography>
        {/* <hr></hr> */}
      </Container>
      {/* Our Courses  Section */}
      <Container component="main" sx={classes.Our_Courses_Section}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={classes.most_popular_text}
        >
          Most popular
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          sx={classes.Our_Courses_text}
        >
          Our Courses
        </Typography>
        {/* <hr></hr> */}
        {children}
      </Container>

      {/* Our Facility  Section */}
      {/* <div sx={classes.facilities_section}>  */}
      <Container component="main" sx={classes.facilities_section}>
        <Typography
          variant="h6"
          textAlign="center"
          sx={classes.europeanit_name}
        >
          European IT
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          sx={classes.facilities_head_text}
        >
          Facilities
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Item>
                {" "}
                <Card sx={classes.facilities_content}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.facilities_content_head}
                      >
                        24/7 Online Support
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={classes.facilities_content_paragraph}
                      >
                        Each time is very important to us. European IT is giving
                        24/7 <a href="#">online support</a> for the students for
                        any information review and solving problem.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={classes.facilities_content}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.facilities_content_head}
                      >
                        Lifetime Support
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={classes.facilities_content_paragraph}
                      >
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
                <Card sx={classes.facilities_content}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.facilities_content_head}
                      >
                        Practice Lab Support
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={classes.facilities_content_paragraph}
                      >
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
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={4} md={4} sx={{ maxHeight: 400 }}>
              <Item sx={{ background: "white" }}>
                {" "}
                <Card sx={classes.facilities_content}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.facilities_content_head}
                      >
                        Class Video
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={classes.facilities_content_paragraph}
                      >
                        <a href="#">Video</a> for each class of European IT
                        Institute is stored and provided to students. This will
                        allow students to better understand the contents of the
                        class.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>
                <Card sx={classes.facilities_content}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.facilities_content_head}
                      >
                        Job Placement
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={classes.facilities_content_paragraph}
                      >
                        European IT manage job for talented students through
                        their job placement cell at European IT own firm as well
                        as other firms.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} md={4} className={{padding:'0'}}>
              <Item>
                <Card sx={classes.facilities_content}>
                  <CardActionArea>
                    <SupportAgentIcon sx={{ fontSize: 40 }} />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={classes.facilities_content_head}
                      >
                        Job Placement
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={classes.facilities_content_paragraph}
                      >
                        European IT manage job for talented{" "}
                        <a href="#">students</a> through their job placement
                        cell at European IT own firm as well as other firms.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* job placement section */}

      <Container>
        <Grid container sx={classes.job_placement_content}>
          <Grid item md={6} textAlign="center" padding="25px">
            <Typography variant="p" sx={classes.job_text}>
              Job
            </Typography>

            <Typography variant="h4" sx={classes.placement_text}>
              Placement
            </Typography>

            <Box
              component="img"
              sx={{
                borderRadius: "50px",
                marginTop: "20px",
              }}
              alt="ok."
              src="images/European-IT-Rukaiya-Khatun.jpg"
            />

            <Typography
              variant="p"
              display="block"
              sx={classes.job_placement_bio}
            >
              European IT manage the job for talented students through their job
              placement cell at European ITs firm as well as other firms. I was
              a student of Pabna Polytechnic Institute. I have completed my
              industrial attachment from European IT Institute in 2019. From my
              childhood, I was very much interested in{" "}
              <a href="#" sx={classes.Graphic_design_link}>
                Graphic Design
              </a>{" "}
              Sector. For that, I have chosen the subject for industrial
              attachment Graphic Design. It was an awesome experience when I was
              a student of European IT. The Instructor of this Institute always
              supported us. After completed my industrial attachment I got a job
              opportunity from the European IT firm. Not only me but also some
              of my friends had got the opportunity.
            </Typography>

            <Typography
              variant="p"
              display="block"
              sx={classes.job_placement_student_name}
            >
              Mst Rukiea Khatun
            </Typography>

            <Typography variant="p" sx={classes.job_placement_tittle}>
              Graphic Designer
            </Typography>
          </Grid>

          <Grid item md={6} padding="25px">
            <iframe
              id="eu-video"
              type="text/html"
              width="100%"
              height="580"
              src={`How We Hire at Google.mp4`}
              frameBorder="0"
            ></iframe>
          </Grid>
        </Grid>
      </Container>

      {/* </div> */}
      {/* Our Partnet Section */}
      <Container sx={classes.our_partners_section}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={classes.our_partners_head}
        >
          Our Partners
        </Typography>
        <div className={styles.carosoul}>
          <Carousel breakPoints={breakPoints2}>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
            <Item>
              <CardMedia
                sx={classes.carosoul}
                component="img"
                image={"images/slider2.webp"}
                title="ok"
              ></CardMedia>
            </Item>
          </Carousel>
        </div>
      </Container>

      {/* footer_contact_section */}

      <div sx={classes.footer_contact_section}>
        <Container>
          <Grid container sx={classes.contact_items}>
            <Grid item md={3}>
              <SupportAgentIcon sx={{ fontSize: 40 }} />
              <Typography
                variant="p"
                display="block"
                sx={classes.footer_contact_head}
              >
                Address
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                Noor Mansion (3rd Floor), Plot#04,
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                Main Road#01, Mirpur-10, Dhaka-1216
              </Typography>
            </Grid>

            <Grid item md={3}>
              <SupportAgentIcon sx={{ fontSize: 40 }} />
              <Typography
                variant="p"
                display="block"
                sx={classes.footer_contact_head}
              >
                Call Us
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                +880 188 99 77 950
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                +880 188 99 77 951
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                +880 188 99 77 952
              </Typography>
            </Grid>

            <Grid item md={3}>
              <SupportAgentIcon sx={{ fontSize: 40 }} />
              <Typography
                variant="p"
                display="block"
                sx={classes.footer_contact_head}
              >
                Email
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                info@europeanit-inst.com
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                help@europeanit-inst.com
              </Typography>
            </Grid>

            <Grid item md={3}>
              <SupportAgentIcon sx={{ fontSize: 40 }} />
              <Typography
                variant="p"
                display="block"
                sx={classes.footer_contact_head}
              >
                Work Hours
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                Monday - Sunday
              </Typography>

              <Typography
                variant="span"
                display="block"
                sx={classes.footer_contact_item}
              >
                10AM - 09PM
              </Typography>
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="medium"
              sx={classes.contact_button}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </div>

      {/* footer logo and icon section */}

      <div sx={classes.footer_logo_icon_content}>
        {/* <Container> */}
          <Grid container sx={classes.footer_logo_icon_content}>
            <Grid item md={4}   textAlign="center">
              <Link href="#" >
                <Box
                  component="img"
                 
                  sx={{
                    // height: 60,
                    // width: 250,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="ok."
                  src="images/logo.png"
                />
              </Link>
            </Grid>

            <Grid item md={4}>
              <Typography
                variant="h3"
                display="block"
                textAlign="center"
                sx={classes.follow_us_text}
              >
                Follow Us
              </Typography>
              <Box textAlign="center">
                <Link href="#" underline="none">
                  <FacebookIcon sx={classes.footer_icon} />
                </Link>

                <Link href="#" underline="none">
                  <InstagramIcon sx={classes.footer_icon} />
                </Link>

                <Link href="#" underline="none">
                  <YouTubeIcon sx={classes.footer_icon} />
                </Link>

                <Link href="#" underline="none">
                  <LinkedInIcon sx={classes.footer_icon} />
                </Link>

                <Link href="#" underline="none">
                  <PinterestIcon sx={classes.footer_icon} />
                </Link>

                <Link href="#" underline="none">
                  <TwitterIcon sx={classes.footer_icon} />
                </Link>
              </Box>
            </Grid>

            <Grid item md={4} textAlign="center">
              <Box
                component="img"
                sx={{
                  width: 386,
                  height: 75,
                }}
                alt="ok."
                src="images/your-journy-to.png"
              />
            </Grid>
          </Grid>
        {/* </Container> */}
      </div>

      <Box component="footer" sx={classes.footer_section}>
        <Container>
          <Typography sx={classes.footer_text}>
            All right reserved. Sanity Euit
          </Typography>
        </Container>
      </Box>
    </>
  );
}
