import { FullscreenExit } from '@mui/icons-material';

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
  carosoul: { width: '100%', height: '100vh' },
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
};

export default classes;
