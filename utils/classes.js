import { FullscreenExit } from '@mui/icons-material';
import { textAlign, width } from '@mui/system';

const classes = {
  logo: {
    width: '265px',
    justifyContent: 'left',
  },
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    minHeight: '80vh',
    marginTop: 10,
  },
  
  carosoul: { width: '100%' },
  footer: {
    marginTop: 1,
    textAlign: 'center',
  },
  appbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  // toolbar: {
  //   justifyContent: 'space-between',
  // },
  // tabs: {
  //   justifyContent: 'right',
  // },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  // search

  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  searchButton: {
    backgroundColor: '#f8c040',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },

  // slider_section
  hHJTFD: {
    margin: '0',
  },
  carosoul: {
   margin: '0',
  },
  eAyARa : {
    position: 'absolute',
    zindex: '9'
  },

  // welcome_section

  welcome_section: {
    paddingTop: '85px',
  },
  welcome_text: {
    color: '#3C6382',
    fontFamily: '"Teko",Sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
  },
  Institute_name: {
    color: '#3C6382',
    fontFamily: ' "Montserrat",Sans-serif',
    fontSize: '30px',
    fontWeight: '700',
    marginTop: '5px',
    marginBottom: '25px',
  },

  europeanit_detale:{
    textAlign: 'center',
    color: '#000',
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: '"Montserrat", Sans-serif',
    lineHeight: '34px',
  },

  // Course Programs
  Our_Courses_Section:{
    padding: ' 82px 0 80px 0',
  },
  
  most_popular_text: {
    color: '#3C6382',
    fontFamily: '"Teko",Sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
  },

  Our_Courses_text: {
    color: '#3C6382',
    fontFamily: ' "Montserrat",Sans-serif',
    fontSize: '30px',
    fontWeight: '700',
    marginTop: '5px',
    marginBottom: '35px',

  },

 
  // facilities_section
  facilities_section: {
    backgroundColor: '#F8F8F8',
    padding: '95px 50px 50px 50px',
    
  },
  europeanit_name: {
    color: '#3C6382',
    fontFamily: '"Teko",Sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
  },

  facilities_head_text: {
    color: '#3C6382',
    fontFamily: ' "Montserrat",Sans-serif',
    fontSize: '30px',
    fontWeight: '700',
    marginTop: '5px',
    marginBottom: '35px',
  },
  facilities_content_head: {
    fontFamily: '"Montserrat", Sans-serif',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '34px',
    color: '#3C6382',
    marginBottom: '10px',
  },
  facilities_content_paragraph:{
    color: '#000000',
    fontFamily: '"Montserrat", Sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '30px',
  },
  facilities_content:{
    minHeight: '250px',


  },
  // job placement section
  job_text:{
    color: '#3C6382',
    fontFamily: '"Teko", Sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  placement_text:{
    color: '#3C6382',
    fontFamily: '"Montserrat", Sans-serif',
    fontSize: '30px',
    fontWeight: '700',
  },
  job_placement_bio:{
    color: '#000000',
    fontFamily: '"Open Sans", Sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '30px',
    marginTop: '30px',
    marginBottom: '22px',
  },
  job_placement_student_name:{
    color: '#00AEEF',
    fontFamily: '"Montserrat", Sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '10px',
  },
  job_placement_tittle:{
    color: '#8B8F91',
    fontFamily: '"Montserrat", Sans-serif',
    fontSize: '16px',
    fontWeight: '500',
  },
  job_placement_content:{
      backgroundColor: ' #F4F4F4',
      padding: '60px 0',
  },

  



  
  
  

  //our partners
  our_partners_section: {
    padding: '50px 50px 50px 50px',
  },

   our_partners_head: {
    color: '#3C6382',
    fontFamily: ' "Montserrat",Sans-serif',
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '35px',
   },
 
  
// slider after durationber
 courses_duration: {
      textAlign: 'center',
      marginBottom: '0',
      fontWeight: '500',
      color: ' #3C6382',
      fontFamily: '"Montserrat", Sans-serif',
      fontSize: '18px',
      
 },
courses_tittle : {
    color: ' #3C6382',
    fontFamily: '"Montserrat", Sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    textAlign: 'center',

},
commone_iconclass: {
  textAlign: 'center',
  padding: '37px 0 15px 0',
},
courses_icon :{
  fontSize: '36px',
  color: '#00AEEF;',
  border: '1px solid #e1e8ea',
  borderRadius: '50%',
  width: '70px',
  minHeight: '70px',
},

// footer_contact_section
footer_contact_section: {
  backgroundColor: 'red',
},
contact_items: {
 textAlign: 'center',
},

footer_contact_head: {
  fontFamily: '"Montserrat", Sans-serif',
  fontSize: '16px',
  fontWeight: '800',
  marginBottom: '10px',
  color: ' #3C6382',
},
footer_contact_item: {

  color: '#3C6382',
    fontFamily: '"Teko", Sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    
},
contact_button: {
  marginTop: '30px',
  marginBottom: '60px',
},

// footer logo and icon section 
follow_us_text: {
  fontFamily: '"Montserrat", Sans-serif',
  fontSize: '30px',
  fontWeight: '700',
  color: ' #3C6382',
},
footer_logo_icon_content:{
  backgroundColor: '#D3DEE9',
   padding: ' 50px 0',
},
footer_icon :{
  margin: '0px 6px',
  color: '#3C6382',
  marginTop: '20px',
},

// footer_section

footer_section :{
  backgroundColor: '#C8D6E5',
  padding: '20px 30px 20px 30px',
  
},

footer_text : {
  fontSize: '14px',
  color: '#3C6382',
   textAlign: 'center',
    fontFamily: '"Montserrat", Sans-serif',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '18px',
},

};



export default classes;
